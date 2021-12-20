const DEFAULT_FONTS = {
    sans: ['Optima', 'sans-serif'],
    serif: ['Garamond', 'Georgia', 'serif'],
};
const mergeSystemFont = function (_family, _system_family = DEFAULT_FONTS.serif) {
    return [_family, ..._system_family]
};

module.exports =mergeSystemFont
