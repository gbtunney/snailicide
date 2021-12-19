import {validateString} from "@/scripts/transformString";

describe('validateString', function () {
    test("validateString", () => {
        expect(validateString("kitten", ["kit", "hi"], "startsWith")).toEqual(true)
        expect(validateString("kitten", ["kitten", "test"], "eq")).toEqual(true)
        expect(validateString("Hi", "hi", "eq", false)).toEqual(true)
        expect(validateString("ggg", "gGg", "includes")).toEqual(false)
        expect(validateString("ggg", "gGg", "includes", false)).toEqual(true)
    });
});
