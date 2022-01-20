import * as RA from "ramda-adjunct";
import VuexORM, { Model, Database } from "@vuex-orm/core";

/* * Vuex ORM - Init New Database Function * */
export function getDatabaseInstance(models: Array<Model> | Model) {
  // Create a new instance of Database.
  const _database = new VuexORM.Database();
  registerModels(_database, models);
  return VuexORM.install(_database);
}

/* * Vuex ORM - Register Models Function * */
function registerModels(_database: Database, models: Array<Model> | Model) {
  const database = _database;
  const _models: Array<Model> | Array<Array<Model>> = RA.ensureArray(models);
  _models.forEach(function (model_options) {
    // @ts-expect-error idk why it is being mean ...
    database.register(...RA.ensureArray(model_options));
  });
}

//************** VUEX ORM  register plugins function *****************//
/**
 * registerOrmPlugins
 * @param {Array<PluginObject<any>> | PluginObject<any>} value - description
 * @param {boolean} [d=default] logging - log debug info
 */
export const registerOrmPlugins = function (
  plugins: Array<Array<{ any }>>,
  logging = false
) {
  Object.entries(RA.ensureArray(plugins)).forEach(function ([key, value]) {
    const [plugin = false, options = {}] = RA.ensureArray(value);
    if (plugin === false) return;
    const _plugin = plugin;
    const log = `Plugin Registered: options: ${JSON.stringify(options)}`;
    VuexORM.use(_plugin, options);
    if (logging) console.log(log);
  });
};
