import {
    replaceAllCharacters,
    trimCharacters
} from "@/scripts/transformString/_characters";
import * as R from "ramda"

describe('replace characters', function () {

    test("trimCharacters", () => {
        expect(trimCharacters("--", "giilliannn---", false, true))
            .toEqual("giilliannn-")
        expect(trimCharacters("--", "giilliannn---", true, false))
            .toEqual("giilliannn---")
        expect(trimCharacters(" ", "  bg-test "))
            .toEqual("bg-test")
        expect(trimCharacters(undefined, "  bg-test "))
            .toEqual("bg-test")
    })

    test("replaceCharacters", () => {

        /* * Replace with function Example ( ramda ) * */
        expect(R.replace("gill", R.toUpper, "gillian-tu-nney"))
            .toEqual("GILLian-tu-nney")

        expect(replaceAllCharacters("gill", '__', "gillian-tu-nney"))
            .toEqual("__ian-tu-nney")
        expect(replaceAllCharacters(["gill", "-"], '!', "gillian-tu-nney"))
            .toEqual("!ian!tu!nney")

        /* * example = replace all uppercase with ! * */
        expect(replaceAllCharacters([/[1A-Z]/g, "gill", "-"], '!', "gillian Tunney"))
            .toEqual("!ian !unney")
        expect(replaceAllCharacters(/[1A-Z]/g, '!', "gIllian Tunney"))
            .toEqual("g!llian !unney")
    })
});

