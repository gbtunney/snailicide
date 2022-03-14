//Todo: figure out how to use env here
//Do not know why this is needed in addition to the .graphqlconfig file ( used for IDE )
module.exports = {
  client: {
    service: {
      name: 'shopify',
      url: 'https://o-wool-stage.myshopify.com/api/graphql',
      headers: {
        'X-Shopify-Storefront-Access-Token': 'c20015f58d86ebe8863bbf7c7e2993d9',
      }
    },
    excludes: ['**/node_modules/**/*'],
    includes:['src/graphql/**/*.ts','src/graphql/*.graphql']
  }
};
// https://www.leighhalliday.com/generating-types-apollo
