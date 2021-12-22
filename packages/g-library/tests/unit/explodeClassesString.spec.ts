//v-tw='[{"variant":false,"type":"root","selector":"*","classes":[".bg-accent-primary-dk"],"limit":false,"operation":"add"},{"variant":"hover","type":"root","selector":"*","classes":[".bg-accent-secondary-lt"],"limit":false,"operation":"add"}]'

import {trimCharacters, replaceCharacters} from "@/scripts/transformString";
import {transformExplodeArray} from "@/scripts/transformString";

import {transformString, transformStringAll, validateString} from "@/scripts/transformString";
import * as RA from "ramda-adjunct";

describe("transformExplodeArray.spec.ts", () => {
    test("transformExplodeArray", () => {

        expect(
            transformExplodeArray("  bg-accent-primary-dk,  'bg-accent-secondary', .p-2","hover   "))
            .toEqual(['hover:bg-accent-primary-dk', 'hover:bg-accent-secondary', "hover:p-2"]);

    })
    test("transformExplodeArray", () => {
        //string with csv
        expect(transformExplodeArray("  bg-accent-primary-dk,  bg-accent-secondary, .p-2")).toEqual(['bg-accent-primary-dk', 'bg-accent-secondary', "p-2"]);

        //string with spaces
        expect(transformExplodeArray("  bg-primary-dk bg-accent-secondary .p-2")).toEqual(['bg-primary-dk', 'bg-accent-secondary', "p-2"]);

        //proper array as string
        expect(transformExplodeArray("[ 'bg-accent-primary-dk','bg-accent-secondary','p-2' ]")).toEqual(['bg-accent-primary-dk', 'bg-accent-secondary', "p-2"]);

        //proper array
        expect(transformExplodeArray(['  bg-accent-primary-dk', '  bg-accent-secondary', ".p-2 "])).toEqual(['bg-accent-primary-dk', 'bg-accent-secondary', "p-2"]);

    });
});
