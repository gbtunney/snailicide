import {
  isInteger,
  toInteger,
  validateString,
  trimCharacters,
} from "@snailicide/g-library";
import * as R from "ramda";
import * as RA from "ramda-adjunct";
// @ts-expect-error can't load json i guess?
import options from "./../../options.json";

const { LOAD_MODE: LOAD_MODES_ARRAY } = options;

export const LoadModeMixin = {
  props: {
    /**
     * Load Mode - Use handle to load from api
     * @values LOAD_ALL, LOAD_HANDLE_ALWAYS, LOAD_HANDLE_NOT_IN_DATABASE,LOAD_NEVER
     */
    load_mode: {
      type: [Boolean, String, Number],
      default: "LOAD_HANDLE_NOT_IN_DATABASE",
      //TODO CHANGE VALIDATOR TO MY FUNCTION
      validator: function (value) {
        if (
          RA.isBoolean(value) ||
          (isInteger(value) && LOAD_MODES_ARRAY.length >= toInteger(value))
        )
          return true;
        if (RA.isString(value))
          return validateString(value, LOAD_MODES_ARRAY, "contains");
        return false;
      },
    },
  },
  computed: {
    LoadMode: function () {
      const value = this.$props.load_mode;
      if (value === false) return "LOAD_NEVER";
      if (value === true) return "LOAD_HANDLE_ALWAYS";
      if (
        RA.isString(value) &&
        validateString(value, LOAD_MODES_ARRAY, "contains")
      )
        return trimCharacters(value, [" ", "'", '"', "_"]);
      if (isInteger(value) && LOAD_MODES_ARRAY[toInteger(value)])
        return LOAD_MODES_ARRAY[toInteger(value)];
      return "LOAD_NEVER";
    },
  },
  methods: {
    initializeLoadInstance(handle = false, _load_mode = "LOAD_HANDLE_ALWAYS") {
      if (handle === false || !_load_mode) return;
      if (handle) console.log("TRYING TO LOAD INSTANCEEE", handle, _load_mode);
      if (handle) {
        if (handle)
          console.log("TRYING TO dispatch loaderrr", handle, _load_mode);
        this.$store.dispatch("productloader/load_items", [
          [this.$props],
          _load_mode,
        ]);
      }
    },
  },
};
export default LoadModeMixin;
