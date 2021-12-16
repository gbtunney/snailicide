import * as RA from "ramda-adjunct";

const string_func =  {
trimStart: RA.trimCharsStart,
    trimEnd: RA.trimCharsEnd
}

/*
import {charTrim, replaceAllChars} from "@/scripts/_string";

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
*/
