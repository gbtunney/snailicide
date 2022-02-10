import * as RA from "ramda-adjunct"
import * as R from "ramda"
import {faker} from '@faker-js/faker';
import {transformExplodeArray} from "@snailicide/g-library";
import {debugDirective} from "@snailicide/g-vue";

//types
import {DirectiveOptions} from "vue/types/options";

const fakerShortCutFunctions = {
    default: faker.lorem.word,

    p: faker.lorem.paragraph,
    paragraph: faker.lorem.paragraph,

    ps: faker.lorem.paragraphs,
    paragraphs: faker.lorem.paragraphs,

    s: faker.lorem.sentence,
    sentence: faker.lorem.sentence,

    ss: faker.lorem.sentences,
    sentences: faker.lorem.sentences,

    h: faker.lorem.words,
    ws: faker.lorem.words,
    words: faker.lorem.words,

    w: faker.lorem.word,
    word: faker.lorem.word,

    n: faker.random.number,
    int: faker.random.number,
    number: faker.random.number,

    f: faker.random.float,
    d: faker.random.float,
    float: faker.random.float,
}
const errorValue = function (): string {
    return "Error Occured."
}
const getShortCutFunction = function (value = "default") {
    return (value && fakerShortCutFunctions[value]) ? fakerShortCutFunctions[value] : false
}
/* * FAKER  * todo: please update this
* @param {string}- arg  - faker model name OR shortcuts= p,s,ss,h,w,  n,int, f,d
* @param {string} - variant ---- formatter: uppercase,lowercase,cap */
export const getFakerFunction = function (arg = "default",
                                          value: any = false,
                                          modifiers: Record<string, boolean> = {}) {
    if (getShortCutFunction(arg) !== false) return getShortCutFunction(arg)
    else if (RA.isString(arg) && R.has(arg)(faker)) {
        const fakerModule = faker[arg];
        /* if ho modifiers, use a default function from the fakerModule */
        if (modifiers && R.isEmpty(modifiers)) {
            const valuesArr = Array.from(Object.entries(fakerModule)).filter(function ([_key, _value]) {
                // @ts-expect-error dont kniw
                return (_value && _value.name && RA.isNotEmpty(_value.name) && RA.isFunction(_value))
            })
            const [__func] = valuesArr[0]
            return (RA.isFunction(__func)) ? __func : errorValue
        }
        /* * see if modifiers stack and get a function in fakerModule  * */
        return Object.entries(modifiers).reduce((accumulator, [key]) => {
            if (RA.isString(key) && R.has(key)(accumulator)) {
                return (accumulator[key] && RA.isFunction(accumulator[key])) ? accumulator[key] : "error"
            }
            return accumulator
        }, fakerModule);
        /* * if nothing else returns a function, try to see if value is a shortcut * */
    } else if (RA.isString(value) && getShortCutFunction(value) !== false) return getShortCutFunction(value)
    return false
}

export const vFaker: DirectiveOptions = {
    bind: function (el, binding) {
        debugDirective(binding, "v-faker", true)
        const {
            arg = false,
            expression: _expression = false,
            value: _value = [],
            modifiers = {}
        } = binding
        const value: Array<any> =
            (RA.isString(_value))
                ? transformExplodeArray(_value)
                : RA.ensureArray(_value)
        if (RA.isString(arg) || RA.isNumber(arg)) el.innerHTML = getFakerFunction(arg, (!RA.isEmptyArray(value)) ? value[0] : false, modifiers)(...RA.ensureArray(value))
    }
}
export default vFaker
