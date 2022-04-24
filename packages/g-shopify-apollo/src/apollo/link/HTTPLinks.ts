import {iStorefrontApiConfig} from "../../types";
import {HttpLink} from "@apollo/client/core";

export const createApolloHttpLink = (payload: iStorefrontApiConfig) => {
    return new HttpLink({
        uri: `https://${payload.domain}/api${(payload.version) ? `/${payload.version}` : `/`}/graphql.json`,
        headers: {'X-Shopify-Storefront-Access-Token': payload.storefrontAccessToken},
    });
}
