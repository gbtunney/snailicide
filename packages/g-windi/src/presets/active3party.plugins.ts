import filters from 'windicss/plugin/filters'
import aspect_ratio from 'windicss/plugin/aspect-ratio'
import forms from 'windicss/plugin/forms'
import line_clamp from 'windicss/plugin/line-clamp'
import typography from 'windicss/plugin/typography'

const active_plugins = [
    filters,
    aspect_ratio,
    forms,
    line_clamp,
    typography({
        modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    })
]
export const preset3rdPartyPlugins = {
    plugins: active_plugins
}
export default preset3rdPartyPlugins
