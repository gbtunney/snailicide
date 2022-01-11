<script>
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {validateString,transformString,transformStringAll} from "@snailicide/g-library";

console.log("transformStringAlltransformStringAll",transformStringAll(['material'],["mat"],["trim" ]))
console.log("ex2",transformStringAll( ",,.  var (--col...or-v)ar)", [",", "."," "],[
 "capitalize"
]))
export default {
  name: "gValidateTransformString",
  data: function () {
    return {}
  },
  props: {
    /**
     * String value to validate
     */
    value: {
      type: [Boolean, String ,Number],
      default: false
    },
    /**
     * list of values to compare false will NOT  use list to validate.
     * @values boolean | string |Array<string>
     */
    list: {
      type: [Boolean, String, Array],
      default: false
    },
    /**
     * string validation operation - false will NOT be validated or use list.
     * @values { startsWith, includes, endsWith, eq, contains }
     */
    operation: {
      type: [String, Boolean],
      default: 'eq'
    },
    /**
     * true - valid string csv ","
     * false - do not split valid string
     * string - character to split by
     */
    delimiter: {
      type: [Boolean, String],
      default: false
    }
  },
  methods:{
    transformString : transformStringAll
  },
  computed: {
    Value(){
      const {value =false} =  this.$props
      if (this.isValid===false || RA.isBoolean(value) ) return false
      if ( this.Delimiter===false) return value
      return transformStringAll( value
          .toString()
          .split(this.Delimiter)
          .filter(function (_item) {
            return _item.length > 2;
          }), [",", "."," "],[
        "trim"
      ])
    },
    isValid(){
      const {value = false,list=false,operation = false} = this.$props
      if ( !this.requireValidate) return true
      return validateString(value,list,operation, false)
    },
    requireValidate() {
      const {list = false,operation = false, value = false} = this.$props
      console.log('reqqqq ', RA.ensureArray(list).length, ( RA.ensureArray(list).length>=0))
      return ( operation === false || list === false
          ? false
          :  ( RA.ensureArray(list).length>=0))
    },
    Delimiter() {
      const {delimiter = false, value = false} = this.$props
      if (delimiter === false) return false
      if (delimiter === true) return ","
      if ((value).toString().includes(delimiter)) return delimiter
      console.warn(`gValidateTransformString: value(${value}) does not contain character ${delimiter}\nThe validated string will not be split`)
      return false
    }
  },
  render() {
    /**
     * @slot
     * @binding {boolean,string} Value - valid value with delimiter split applied.
     * @binding {function} transformString - general transformString function.
     */
    return this.$scopedSlots.default([
   transformStringAll,
      ...this.Value,
    ])
  }
}
</script>
