import * as RA from "ramda-adjunct"
import { getDatabaseInstance, registerOrmPlugins } from ".";
import { OrmPluginOptions } from "./types";
import { Model } from "@vuex-orm/core";
import axios from "axios";

export const getVuexOrmDatabase = function (options: OrmPluginOptions) {
  const { models = [], plugins = [] }: OrmPluginOptions = options;
  const database = getDatabaseInstance(models);
  const _plugins:Array<Array<{ any }>>  = RA.ensureArray(plugins)
  if (plugins.length > 0) registerOrmPlugins(_plugins, true);
  // @ts-expect-error needs static type
  Model.setAxios(axios);
  return database;
};
export default getVuexOrmDatabase
