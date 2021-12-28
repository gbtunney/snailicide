const _getPaths = function* (o, p = []) {
    yield p
    if (Object(o) === o)
        for (const k of Object.keys(o))
            yield* _getPaths(o[k], [...p, k])
}
export const getPaths = (value: Object) =>( [..._getPaths(value)])

export const concatPaths= function(){

}
export default getPaths
