import * as R from "ramda"
import * as RA from "ramda-adjunct"

import {transformString, validateString,transformExplodeArray } from "@snailicide/g-library";
import {cleanBooleanType} from "@snailicide/g-library/src/scripts/_type";

//prop to computedd
const getClasses = function(value =[]){
    if ( RA.isBoolean(value) )return value
  return  transformExplodeArray(value)
}

export const addlClassNames = {
    props: {
        /**
         * Additional CSS classes
         */
        classes: {
            default: false,
            type: [String, Array, Boolean]
        },
    },
    getClasses
}

export default addlClassNames
