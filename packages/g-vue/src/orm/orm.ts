import { getDatabaseInstance } from ".";
import { OrmPluginOptions } from "./types";

export const getVuexOrmDatabase = function (options: OrmPluginOptions) {
  const { models = [], logging=false }: OrmPluginOptions = options;
  const database = getDatabaseInstance(models);
  return database;
};
export default getVuexOrmDatabase
