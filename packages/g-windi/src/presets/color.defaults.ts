import colors from "windicss/colors";

const colorDefaultKeys = Array.from(Object.entries({...colors})).reduce((accumulator, [key, value]) => {
    return {...accumulator, ...(value["500"]) ? {[key]: {"DEFAULT": value["500"]}} : {}}
}, {});
export default {
    theme: {
        extend: {
            colors: colorDefaultKeys
        }
    },
}
