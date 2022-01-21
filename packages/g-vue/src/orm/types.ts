import { Model } from "@vuex-orm/core";

export interface OrmPluginOptions {
  models: Array<Model>;
 // plugins: Array<Array<{ any }>> | Array<{ any }>;
  logging: boolean
}
