import {cleanBooleanType, cleanIntegerType} from "@/scripts/_type"
import {batchtest} from "../helpers";
import {charTrim, replaceAllChars} from "@/scripts/_string";

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
});

const bl = ["_", "!", "."]

describe("charTrim", () => {
    test("charTrim", () => {
        expect(charTrim("._.str!n_g_", bl)).toEqual("str!n_g");
        expect(charTrim("._.str!n_g_", bl, false)).toEqual("._.str!n_g");
        expect(charTrim("._.str!n_g_", bl, true, false)).toEqual("str!n_g_");
        expect(charTrim("._.str!n_g_", bl, false, false)).toEqual("._.str!n_g_");
        expect(charTrim("12", bl)).toEqual("12");
        expect(charTrim('12.025', bl)).toEqual('12.025');
        expect(charTrim(12.02, bl)).toEqual(12.02);
        expect(charTrim((.8).toString(), [...bl, "0"])).toEqual("8");
        expect(charTrim((1.8).toString(), [...bl, "0"])).toEqual("1.8");
    });
});

describe("replaceAllChars", () => {
    test("replaceAllChars", () => {
        expect(replaceAllChars("._.str!n_g_", ["!"])).toEqual("._.strn_g_");
        expect(replaceAllChars("._.str!n_g_", "!")).toEqual("._.strn_g_");
        expect(replaceAllChars("._.str!n_g_", "!", "^")).toEqual("._.str^n_g_");
        expect(replaceAllChars("gillian_bray_tunney", ["bray", "e"], "^")).toEqual("gillian_^_tunn^y");
        expect(replaceAllChars("gillian_bray_tunney", "bray", false)).toEqual("gillian_bray_tunney");
        expect(replaceAllChars(22, "bray", "^")).toEqual(22);
    });
});
