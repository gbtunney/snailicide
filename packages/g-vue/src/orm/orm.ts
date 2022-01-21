import * as RA from "ramda-adjunct"
import { getDatabaseInstance, registerOrmPlugins } from ".";
import { OrmPluginOptions } from "./types";
import { Model } from "@vuex-orm/core";
import axios from "axios";
import * as console from "console";

export const getVuexOrmDatabase = function (options: OrmPluginOptions) {
  const { models = [], logging=false }: OrmPluginOptions = options;
 // console.log("orm options ",options)
  const database = getDatabaseInstance(models);
  //const _plugins:Array<Array<{ any }>>  = RA.ensureArray(plugins)
 // if (plugins.length > 0) registerOrmPlugins(_plugins, logging);
  // @ts-expect-error needs static type
  //Model.setAxios(axios);
  return database;
};
export default getVuexOrmDatabase
