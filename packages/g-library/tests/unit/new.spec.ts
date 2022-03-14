import {
    camelCase,
    unCamelCase,
    properCase,
    sentenceCase,
    slugify,
} from "../../src/scripts/string/_stringUtils";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {toUpper} from "ramda";
describe('string  utils', function () {
    test("camelCase,unCamelCase", () => {
        expect(camelCase("Some Crazy Name")).toEqual('someCrazyName')
        expect(camelCase('o-wash-sport')).toEqual('oWashSport')
        expect(unCamelCase('ABCAcryonym')).toEqual("ABC Acryonym")
        expect(unCamelCase('someCrazyName')).toEqual("Some Crazy Name")
    })
    test("properCase, sentanceCase", () => {
        expect(properCase('I am a person!')).toEqual('I Am A Person!')
        expect(sentenceCase('I am a person!')).toEqual('I am a person!')
    })
    test("slugify", () => {
        expect(slugify("O wash Sport")).toEqual('o-wash-sport')
        expect(slugify("O wash Sport", "_")).toEqual('o_wash_sport')
    })
  //  console.log("testing the replace ", R.replace(/[a-z]/gi,R.add(2),"someCrazyName"))
//gil32323232 hjkhGiggI
    ////[1-9]/gi
});
