import {DirectiveBinding} from "vue/types/options";
import {replaceCharacters} from "@snailicide/g-library";
/**
* debugDirective
 * @param {DirectiveBinding} binding - directive binding
 * @param {string} [d=directive] directive_name - output message into console.log
 * @param {boolean} [d=false] console_logging - output message into console.log
 * @param {boolean}  [d=false] useHTML - use html <br> vs newline char
 * @return {string}
*/
export const debugDirective = function (binding: DirectiveBinding = {} as DirectiveBinding ,directive_name = "directive", console_logging = false,useHTML = false ) {
    const s = JSON.stringify
    let logString :string= Object.entries(binding).reduce((accumulator, [key, value], currentIndex, array) => {
        return `${accumulator} ${key} : ${s(value)} <br>`
    }, `--------------debug - ${directive_name}--------------------<br>`);
    logString =  ( useHTML)  ? logString : ( replaceCharacters(logString, "<br>", "\n") as string).toString()
    if (console_logging) console.log(logString)
    return logString
}
export default debugDirective
