import { ProductInstanceSingle } from "./../orm/models";

const defaultInstance = ProductInstanceSingle.fields();
// @ts-expect-error can't load json i guess?
import options from "./../../options.json";

const { EDITABLE_DEFAULTS } = options;
export const EditableOptionsMixins = {
  props: {
    quantity_editable: {
      type: Boolean,
      default: true,
    },
    variant_editable: {
      type: Boolean,
      default: true,
    },
    options_editable: {
      type: [Boolean, Array],
      default: true,
    },
    add_to_cart_enabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
export default EditableOptionsMixins;
