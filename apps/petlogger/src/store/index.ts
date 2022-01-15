import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM, {Database} from '@vuex-orm/core'

Vue.use(Vuex)
import * as RA from "ramda-adjunct"

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

import VuexORMGraphQL from '@vuex-orm/plugin-graphql';
VuexORM.use(VuexORMGraphQL, { database });


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
