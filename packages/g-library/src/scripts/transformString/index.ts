/* * TRANSFORM STRING LIBRARY *
* @author Gillian Tunney */
export {replaceAllCharacters as replaceCharacters, trimCharacters} from './_characters';

//TODO: this is broken
//export {transformString, transformStringAll} from "./_transformString";
export {
    validateString,
    validateStringBatch,
    startsWith,
    endsWith,
    includes,
    eq,
    contains,
    match
} from "./_validateString"


//export {transformExplodeArray} from "./_transformExplodeArray"
export default {}
