import Vue, { VNode } from "vue";
import { LineItem } from "shopify-buy";
import { parseGidWithParams } from "@shopify/admin-graphql-api-utilities";
import { toInteger } from "@snailicide/g-library";

export default Vue.extend({
  name: "BuyCartProvider",
  render(): VNode {
    //  if (!this.cart) {
    // return
    // }
    return this.$scopedSlots.default({
      ...this.cartProps,
      removeItem: this.removeItem,
      updateItemQuantity: this.updateItemQuantity,
      cartIsUpdating: this.$store.get("shopifycart/loading"),
    });
  },
  props: {
    updateCart: {
      default: false,
      type: Boolean,
    },
  },
  watch: {
    updateCart: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(" updateCart changed from " + oldValue + " to " + newValue);
        if (newValue) this.$store.dispatch("shopifycart/getCart");
      },
    },
  },
  mounted() {
    //this.$emit("ready", cart);
  },
  computed: {
    Items() {
      if (this.ItemCount <= 0) return false;
      const items = this.$store
        .get("shopifycart/cart")
        .lineItems.map(function (item) {
          const { id, params } = parseGidWithParams(atob(item.id).toString());
          const { id: variant_id } = parseGidWithParams(
            atob(item.variant.id).toString()
          );
          const { quantity = false } = item;
          const { handle = false } = item.variant.product;
          return {
            pid: item.id,
            handle,
            id: toInteger(id), //instance id.
            variant_id: toInteger(variant_id),
            quantity: toInteger(quantity),
          };
        });
      return items;
    },
    ItemCount() {
      return this.$store.get("shopifycart/cart") &&
        this.$store.get("shopifycart/cart").lineItems
        ? this.$store
            .get("shopifycart/cart")
            .lineItems.reduce(
              (accumulator, currentValue, currentIndex, array) => {
                return currentValue.quantity + accumulator;
              },
              0
            )
        : 0;
    },
    cartProps() {
      return {
        Cart: this.$store.get("shopifycart/cart"),
        ItemCount: this.ItemCount, //( this.$store.get('shopifycart/cart') && this.$store.get('shopifycart/cart').lineItems ) ? this.$store.get('shopifycart/cart').lineItems.length:0,
        Items: this.Items,
      };
    },
  },
  methods: {
    removeItem(item: LineItem) {
      //  Shopify.removeItem(item)
    },
    updateItemQuantity(obj, item) {
      const { quantity, pid: id, variantId } = obj;
      console.log("!!!!updateItemQuantityAfter", { id, quantity });
      this.$store.dispatch("shopifycart/updateItemQuantity", [
        { id, quantity },
      ]);
    },
  },
});
