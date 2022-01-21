import * as R from "ramda"
export type PlainObject = {
    [x: string]: any
    [y: number]: never
}
export const mergeOptions = function (
    base_options: PlainObject = {},
    override_options:PlainObject ={},// Record<string, any> = {},
    logging = false,
    remove_false = true
):  Record<string, any> {
    const relevant_override_options = R.pick(Array.from(Object.keys(base_options)), override_options);
    if (logging)
        console.log("base_options" , base_options,"relevant_override_options ", relevant_override_options);
    const merged_options = {
        ...base_options,
        ...relevant_override_options,
    };
    const result = !remove_false
        ? R.filter((n) => n !== false, merged_options)
        : merged_options;
    if (logging) console.log("merged_options result", result);
    return result;
};
