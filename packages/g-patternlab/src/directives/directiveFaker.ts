import * as RA from "ramda-adjunct"
import * as R from "ramda"
import faker from '@faker-js/faker';
import {transformExplodeArray} from "@snailicide/g-library";
import {debugDirective} from "@snailicide/g-vue";

//types
import {DirectiveOptions} from "vue/types/options";

enum fakerShortCuts {
    paragraph = "paragraph", p = paragraph,
    paragraphs = "paragraphs", ps = paragraphs,

    sentence = "sentence", s = sentence,
    sentences = "sentences", ss = sentences,

    word = "default", w = word,
    words = "words", ws = words, h = words,

    number = "number", int = number, n = number,
    float = "float", f = float, d = float,
    default = word
}

const FakerShortCuts = {
    default: faker.lorem.word,
    paragraph: faker.lorem.paragraph,
    paragraphs: faker.lorem.paragraphs,
    sentence: faker.lorem.sentence,
    sentences: faker.lorem.sentences,
    words: faker.lorem.words,
    number: faker.random.number,
    float: faker.random.float,
    getFunction(_key: string = fakerShortCuts.default, ...args: Array<string | number>): string | boolean {
        const key = (R.has(_key)(fakerShortCuts)) ? R.prop(_key, fakerShortCuts) : _key
        return (R.has(key)(this) && RA.isFunction(R.prop(key, this)))
            ? (args.length > 0)
                ? R.prop(key, this)
                : R.prop(key, this)
            : false
    }
}
const errorValue = function (): string {
    return "Error Occured."
}

/* * FAKER  * todo: please update this
* @param {string}- arg  - faker model name OR shortcuts= p,s,ss,h,w,  n,int, f,d
* @param {string} - variant ---- formatter: uppercase,lowercase,cap */
export const getFakerFunction = function (arg = "default",
                                          value?: string | number | Array<string | number>,
                                          modifiers?: Record<string, boolean>) {


    const _value: Array<string | number> = (RA.isNotUndefined(value)) ? RA.ensureArray(value) : [];
    /* If shortcut in arg excists, then return the function */
    if (FakerShortCuts.getFunction(arg) !== false) return FakerShortCuts.getFunction(arg)
    else if (RA.isString(arg) && R.has(arg)(faker)) {
        const fakerModule = faker[arg];
        /* if ho modifiers, use a default function from the fakerModule */
        if (modifiers && R.isEmpty(modifiers)) {
            const valuesArr = Array.from(Object.entries(fakerModule)).filter(function ([_key, _value]) {
                // @ts-expect-error dont kniw
                return (_value && _value.name && RA.isNotEmpty(_value.name) && RA.isFunction(_value))
            })
            const [, __func = false] = valuesArr[0]
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
    } else if (_value.length > 0 && FakerShortCuts.getFunction(_value[0] as string) !== false) return FakerShortCuts.getFunction(_value[0] as string)
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
            (RA.isUndefined(_value))
                ? []
                : (RA.isString(_value))
                    ? transformExplodeArray(_value)
                    : RA.ensureArray(_value)
        const fakerValue = (value.length === 0)
            ? getFakerFunction((arg).toString(), value, modifiers)()
            : getFakerFunction((arg).toString(), value, modifiers)(...value)
        if (RA.isString(fakerValue)) el.innerHTML = fakerValue
    }
}
export default vFaker
