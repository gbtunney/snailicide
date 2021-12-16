import {cleanBooleanType, cleanIntegerType, isInteger} from "@/scripts/_type"
import {batchtest} from "../helpers";
import {trimCharacters} from "@/scripts/_trimCharacters";
import {replaceChars} from "@/scripts/_replaceChars";

const generic_test_values = [
    'gillian',
    {testobj: "testing!!!!"},
    [],
    ["true"],
    true,
    2,
    0
]

describe("Function libTest", () => {
    test("cleanBooleanType", () => {
        expect(cleanBooleanType("true")).toEqual(true);
        expect(cleanBooleanType("true")).not.toEqual("true");
        expect(cleanBooleanType(false)).toEqual(false);
        expect(cleanBooleanType("false")).toEqual(false);
        batchtest(cleanBooleanType, generic_test_values)
    });
    test("cleanNumberType", () => {
        expect(cleanIntegerType(' 2.00', true)).toEqual(2.0)
        expect(cleanIntegerType('2px')).toEqual('2px')
        expect(cleanIntegerType('2px', true)).toEqual(2)
        expect(cleanIntegerType(false)).toEqual(false)
        expect(cleanIntegerType("2")).not.toEqual("2")
        batchtest(cleanIntegerType, generic_test_values)
    });
    test("isInteger", () => {
        expect(isInteger(2.00)).toEqual(true)
        expect(isInteger('4px')).not.toEqual(true)
        expect(isInteger('3')).toEqual(true)
        expect(isInteger(true)).toEqual(false)
        expect(isInteger(["22", 4])).toEqual(false)
    });
});


/* * UNIT TESTS * */
const bl = ["_", "!", "."]
describe("trimCharacters", () => {
    test("trimCharacters", () => {
        expect(trimCharacters("._.str!n_g_", bl)).toEqual("str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, false)).toEqual("._.str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, true, false)).toEqual("str!n_g_");
        expect(trimCharacters("._.str!n_g_", bl, false, false)).toEqual("._.str!n_g_");
        expect(trimCharacters("12", bl)).toEqual(12);
        expect(trimCharacters("!12__", bl)).toEqual(12);
        expect(trimCharacters("12", bl, true, true, false)).toEqual("12");
        expect(trimCharacters('12.025', bl)).toEqual('12.025');
        expect(trimCharacters(12.02, bl)).toEqual(12.02);
        expect(trimCharacters((.8).toString(), [...bl, "0"], true, true, false)).toEqual("8");
        expect(trimCharacters((1.8).toString(), [...bl, "0"])).toEqual("1.8");
    });
});

describe("replaceChars", () => {
    test("replaceChars", () => {
        expect(replaceChars("._.str!n_g_", ["!"])).toEqual("._.strn_g_");
        expect(replaceChars("._.str!n_g_", "!")).toEqual("._.strn_g_");
        expect(replaceChars("._.str!n_g_", "!", "^")).toEqual("._.str^n_g_");
        expect(replaceChars("gillian_bray_tunney", ["bray", "e"], "^")).toEqual("gillian_^_tunn^y");
        expect(replaceChars("gillian_bray_tunney", "bray", false)).toEqual("gillian_bray_tunney");
        expect(replaceChars(22, "bray", "^")).toEqual(22);
        expect(replaceChars("22 px ", [" ", "px"], true)).toEqual(22);
        expect(replaceChars("22 px ", [" ", "px", false], true, false)).toEqual("22");
    });
});
