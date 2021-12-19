import {trimCharacters} from "../../src/scripts/transformString/_trimCharacters";

const bl = ["_", "!", "."]

describe('Trim Characters', function () {
    test("trimCharacters", () => {
        expect(trimCharacters("._.str!n_g_", bl)).toEqual("str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, false, true)).toEqual("._.str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, true, false)).toEqual("str!n_g_");
        expect(trimCharacters("._.str!n_g_", bl, false, false)).toEqual("._.str!n_g_");
        expect(trimCharacters("12", bl, true, true)).toEqual("12");
        expect(trimCharacters('12.025', bl)).toEqual('12.025');
        expect(trimCharacters(12.02, bl)).toEqual(12.02);
        expect(trimCharacters((.8).toString(), [...bl, "0"], true, true)).toEqual("8");
        expect(trimCharacters((1.8).toString(), [...bl, "0"])).toEqual("1.8");
        expect(trimCharacters("  var (--color-var)", [" ", "var(", "px", ")"], true, true, true)).toEqual('ar (--color-var')
    });
});
