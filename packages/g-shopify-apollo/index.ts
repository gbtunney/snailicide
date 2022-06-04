//import ProductRecommendationsContainer from "./src/components/container/ProductRecommendationsContainer.vue";
//export {ProductRecommendationsContainer}
//above causes grid classes to break---

export {useCache} from "./src/apollo";
export {gShopify} from './src/plugin/gShopify'

export {LocalStorageWrapper, persistCache} from "apollo3-cache-persist";

export type {iStorefrontApiConfig} from "./src/types";
