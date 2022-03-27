import {ApolloLink} from '@apollo/client/core';

export const useApolloLogging = (before = false, after = false) => {
   return new ApolloLink((operation, forward) => {
        // Called before operation is sent to server
        const contextObj: { start: Date } = {start: new Date()}
        operation.setContext(contextObj);
        if (before) console.log(`ApolloLogging: BEFORE OPERATION sent to server: ${operation.operationName}`, operation);
        return forward(operation).map((data) => {
            const {start} = operation.getContext();
            const end = new Date()
            const seconds: number = end.valueOf() - (start as Date).valueOf()
            if (after) console.log(`ApolloLogging: AFTER OPERATION: ${operation.operationName}  took ${seconds} to complete`,
                operation, " data: ", data);
            return data
        });
    });
}
export default useApolloLogging
