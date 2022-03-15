import { isShopifyID } from "./../scripts/shopify";
import { toInteger, isInteger } from "@snailicide/g-library";
import { Product, Variant } from "./../orm/models";
import * as RA from "ramda-adjunct";

export const getVariantPositionToID = function (
    _variant_id: number | string,
    _handle: boolean | string = false
) {
  //and integer
  if (!isInteger(_variant_id)) return 0;
  _variant_id = toInteger(_variant_id);
  ///return if proper shopify id (SID)
  if (isShopifyID(_variant_id)) return _variant_id;
  ///if not, check for handle.
  if (RA.isString(_handle)) {
    const _product_id = Product.productHandleToID(_handle);
    ///get handle to product id, then find position
    const position_index = _variant_id > 0 ? _variant_id : 1;
    const _variant = Variant.query()
        .where("product_id", _product_id)
        .where("position", position_index)
        .first();
    if (_variant && _variant.id && isShopifyID(_variant.id)) {
      return toInteger(_variant.id);
    }
  }
  return 0;
};
export const ProductMixins = {
  props: {
    /**
     * shopify product handle or boolean (if not loaded)
     */
    handle: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Selected Variant SID(9 digits) or Position(integer)
     * @values SID, position
     */
    variant_id: {
      type: [Number, String] /* ID OR SID */,
      default: 1,
    },
  },
  computed:{
    Product: function () {
      if (!this.Handle) return;
      return Product.getProductByHandle(this.Handle)
    },
    Handle: function () {
      return this.$props.handle
    },
  },
  methods: { getVariantPositionToID },
};

export default ProductMixins;
