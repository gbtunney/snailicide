import Vue, { VNode } from "vue";
import { LineItem } from "shopify-buy";
import {parseGidWithParams,composeGid} from '@shopify/admin-graphql-api-utilities';

import {
  validateString,
  transformString,
  transformStringAll,
} from "@snailicide/g-library";

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
  async mounted() {
    const cart = await this.$store.dispatch("shopifycart/getCart");
    //this.$emit("ready", cart);
  },
  computed: {
    Items() {
      if (this.ItemCount <= 0) return false;
      const items = this.$store
          .get("shopifycart/cart")
          .lineItems.map(function (item) {
            const {id} = parseGidWithParams(atob(item.id).toString())
            console.log("dddd",atob(item.id).toString())
            const {id: variant_id} = parseGidWithParams(atob(item.variant.id).toString());
            const {quantity = false} = item;
            const {handle = false} = item.variant.product;
            return {
              id: transformString(id, [], ["parseInt"]),
              variant_id: transformString(variant_id, [], ["parseInt"]),
              handle,
              quantity,
            };
          });
      return items;
    },
    ItemCount() {
      return this.$store.get("shopifycart/cart") &&
        this.$store.get("shopifycart/cart").lineItems
        ? this.$store.get("shopifycart/cart").lineItems.length
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

    updateItemQuantity(obj,item) {
     /* const {quantity}= obj
        const {      id :idbase   }=   item;

      const seach= this.$store
          .get("shopifycart/cart")
          .lineItems.find(function (item) {

              const {id} = parseGidWithParams(atob(item.id).toString())              console.log("utems", idbase,id);

              if (id===idbase )return true;
            return false;
          });
        console.log("utems", seach,item);

      this.$store.dispatch("shopifycart/updateItemQuantity", {item,quantity,seach})*/
      //Shopify.updateItemQuantity(item, qty)
    },
  },
});
