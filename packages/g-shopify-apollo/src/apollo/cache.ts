
//import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client/core'

export const cache: InMemoryCache = new InMemoryCache({

})
export default cache
/*
import { Todos } from "./models/Todos";
import { VisibilityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                todos: {
                    read () {
                        return todosVar();
                    }
                },
                visibilityFilter: {
                    read () {
                        return visibilityFilterVar();
                    },
                }
            }
        }
    }
});

/!**
 * Set initial values when we create cache variables.
 *!/

const todosInitialValue: Todos = [
    {
        id: 0,
        completed: false,
        text: "Use Apollo Client 3"
    }
]

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
    todosInitialValue
);

export const visibilityFilterVar = makeVar<VisibilityFilter>(
    VisibilityFilters.SHOW_ALL
)
*/
