//merge function for less mess
const mergeSystemFont = function (_family:any, _system_family:Array<string>|string|boolean) {
    return [_family, ..._system_family]
};

//get color function bc i dont get thhe color() or theme() functiuobs in tailwind
const getColor = function (_key, _variant = "500", _source = CUSTOM_BASE_COLORS) {
    if (CUSTOM_BASE_COLORS[_key] && CUSTOM_BASE_COLORS[_key][_variant]) return CUSTOM_BASE_COLORS[_key][_variant]
    return
};
