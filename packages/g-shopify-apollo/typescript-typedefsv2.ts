//import { printSchemaWithDirectives } from "@graphql-tools/utils";
//import { GraphQLSchema, stripIgnoredCharacters } from "graphql";
const {printSchema, GraphQLSchema, stripIgnoredCharacters} = require('graphql');

// https://github.com/dotansimha/graphql-code-generator/issues/3899
const writeFile = (schema) => `
  import { gql } from "@apollo/client/core"
  export const typeDefs = gql\`${schema}\`;
`;

const plugin = (schema, documents, config) =>
    writeFile(stripIgnoredCharacters(printSchema(schema)));
module.exports = {
    plugin
}
