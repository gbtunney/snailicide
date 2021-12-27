import Vue from "vue";
import * as RA from "ramda-adjunct"
/**
* Register a global variable to vue.- like $axios
* @param {string|boolean} key - description
* @param {object|boolean} [d=false] value - Value to register (usually Object
* @return {void}
* @example
 *      registerGlobalVariable('faker', import )
*/
export function registerGlobalVariable(key:boolean|string=false, value: object|boolean=false): void {
    if ( RA.isNotString(key) || value === false )return
    Vue[`$${key}`] = value
    Vue.prototype[`$${key}`] = value
}
