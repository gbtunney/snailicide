import {
    InMemoryCache,
    gql,
    makeVar,
} from '@apollo/client/core'
import {TypePolicies} from '@apollo/client/cache';
import {typePolicyMerged} from "./../models";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));

const typePolicies: TypePolicies = {
    ...typePolicyMerged,
}
export const useCache = (): InMemoryCache => {
    return new InMemoryCache({typePolicies: typePolicies})
}

export default useCache
