import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM, {Database} from '@vuex-orm/core'
import Product from './models/equiptment.js'
import * as RA from "ramda-adjunct"

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Product)
//database.register(Post)

/*const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  },
  connectionQueryMode: 'nodes',
  database: database,
  url: awsexports.aws_appsync_graphqlEndpoint,
  includeExtensions: true,
  debug: process.env.NODE_ENV !== 'production'
}*/
const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckqeoc9mx56w201xud226azg8/master'
const auth_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDI0NjIyODIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrcWVvYzlteDU2dzIwMXh1ZDIyNmF6ZzgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGJjNTI1MTktNDA2Yy00NGM3LThjMzctZjk1MGNiMDY3YTY2IiwianRpIjoiY2t5amJtd2JrMHk4YjAxeXlmaWNxOGhpeSJ9.GrpKnqKT7zikmTBJKcrWy8At5xPiOWcmeEfPiaYksJ3dakcGz0Rzvzq1D9BqDUvM9Fxdl3AF6oXw0TjEusJjfQpdPB3Ovxgs037CLViT7oY1ZERKBrRqA8tlrcbW6W-i2jlbztFjYB4IdpcZIhcrktcomo5htjlFiRjdunxCiJn8oVkPrjC025apcmHKg9HRzFqZH8vyf4N2b2pD6WXkrFIkIMDpIKNBrOzKkgz0SEW0Th8SJ8Mm97bdHPqUcNS2ByvUyWRvW98nDzSqSyjT7OAT1KwhUQ9INb5ETFiWqztcayRkdnyPO-f6f-a-f8GDv3SUF6zhZ1WcN74eKXKw_GZEEIPB3KU4M1nCoUZlq72Et7tVVcFu7D1E_wcMRDpKvmGZmFTCS3uQ3DP4LejlbLH01Klh61H6BYzugk7W-F5xwIU1vADkW_PNlgkU0W5QLLhVcOQdxw1gyZ-tccN2KP1xKosPORa_fcdYb7ssGJJU6rIwzxgwQhmlx1rYZ-3pLS4F6Dh90BhiP6KOKeSnLbkBqxmFIDbReC1JrmJIjx9Olas694GkTt12IdAQ4Dmrtz27l3uXtjJv3JMpAc5Tc9RM8wFbGfRrMllaa5tWfCGgu1_XWWCOAVF1QHsQ2BagjWbelLpfX9lk9wLyanxk5hRsdlPUkHmUVtrOU_Bh57s'

import { DefaultAdapter, ConnectionMode } from '@vuex-orm/plugin-graphql';

  class CustomAdapter extends DefaultAdapter {
  // Your code here

  // Example
  getConnectionMode() {
    return ConnectionMode.PLAIN
  }
}

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  headers: {
    authorization: `Bearer ${auth_token}`, // however you get your token
    "Content-Type": "application/json",
  },
  uri: endpoint
})

const options = {
  /*defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  },*/
 // connectionQueryMode: 'plain',
  adapter: new CustomAdapter(),
  url:endpoint,
  database: database,
  includeExtensions: true,
  headers: {
    authorization: `Bearer ${auth_token}`, // however you get your token
    "Content-Type": "application/json",
  },
  debug: process.env.NODE_ENV !== 'production',
 // apolloClient: apolloClient
}
//  url:endpoint,

import VuexORMGraphQL from '@vuex-orm/plugin-graphql';
VuexORM.use(VuexORMGraphQL, options);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [VuexORM.install(database)]
})
