import {InMemoryCache, gql, HttpLink, from, makeVar, makeReference} from '@apollo/client/core'
import {persistCache, LocalStorageWrapper} from 'apollo3-cache-persist';
import {isDefined, Guard} from '@gabrielurbina/type-guard'
import {iStorefrontApiConfig} from "./../types";

export const useCache = (options: Pick<iStorefrontApiConfig, "persist">): { cache: InMemoryCache } => {
    const cache: InMemoryCache = new InMemoryCache({})
    const broke = new Promise<InMemoryCache>((resolve) => {
        if (!options.persist) {
            const persistedComplete = persistCache({
                cache,
                storage: new LocalStorageWrapper(window.localStorage),
            }).then(() => {
                resolve(cache)
            })
        } else resolve(cache)
    });
    return {cache}
}
export default useCache
