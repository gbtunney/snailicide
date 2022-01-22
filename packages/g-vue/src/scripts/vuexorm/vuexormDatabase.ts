import * as RA from "ramda-adjunct";
import VuexORM, { Model, Database } from "@vuex-orm/core";
import { Models } from "./../../types/_types";

/**
 * @function getVuexOrmDatabase
 * Creates new orm Database instance and registers models.
 * @param {Models} models - Array of vuex orm models
 * @return {Database}
 */
export function getVuexOrmDatabase(models: Models) {
  const _database: Database = new VuexORM.Database();
  registerOrmModels(_database, models);
  return VuexORM.install(_database);
}

/**
 * @function registerOrmModels
 * Creates new orm Database instance and registers models.
 * @param {Database} database - vuexorm database
 * @param {Models} models - Array of vuexorm models
 * @return {void}
 */
export function registerOrmModels(database: Database, models: Models): void {
  const _models: Array<any> = RA.ensureArray(models);
  _models.forEach(function (model_options: Model) {
    // @ts-expect-error idk why it is being mean ...
    database.register(...RA.ensureArray(model_options));
  });
}

export default getVuexOrmDatabase;
