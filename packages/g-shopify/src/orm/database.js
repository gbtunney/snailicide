//init orm database
import VuexORM, {Database} from '@vuex-orm/core'
import * as RA from "ramda-adjunct"

//todo: see if "entity" variable really breaks things???

function initDatabase(_database, models = []) {
    const database = _database
    models.forEach(function (model) {
        database.register(...RA.ensureArray(model) )
    })
}

export function registerModels(config) {
    // Create a new instance of Database.
    const _database = new VuexORM.Database()
    const {models = []} = config;
    initDatabase(_database, models)
    return VuexORM.install(_database)
}
