import useWindiCSS from "./../composable/useWindiCSS";
import windiConfig from "./../windi.config.obj";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
import {Directive, ObjectDirective, FunctionDirective, VNode} from "vue";

const    created :FunctionDirective<HTMLElement,VNode> =(el, binding, vnode) =>{
    const {getAttrs, getWindiStyles} = useWindiCSS({config: windiConfig})
    const {success, styleSheet} = getAttrs(vnode.props)
    const {props: {classes}} = vnode
    const {success: classes_success} = getWindiStyles(classes)
    const _success = success.concat(classes_success)

el.setAttribute("success", R.join(" ", _success) )
    console.log("CREATTEERE:", _success, R.join(" ", success) )
    return "jkjk"
    // see below for details on arguments
}
    export const attr :ObjectDirective= {
        created
}
export default attr
