import {DirectiveLink} from "apollo-link-directive";
import {NextLink, Operation} from "@apollo/client/core";

//THIS IS NOT BEING USED IN PROJECT CURRENTLY
// import as apollo link adminDirectiveLink as ApolloLink,
const functionToUppercase = (value: string) => {
    return (value).toUpperCase()
}
export const adminDirectiveLink: unknown = new DirectiveLink(
    [{
        directive: 'uppercase',
        callback: (operation: Operation, _forward: NextLink) => {
            console.log("uppercase directive called!!!!!!!!", operation)
            return operation.setContext({uppercase: functionToUppercase})
        }
    }]
);
export default adminDirectiveLink
