import gql from 'graphql-tag';

export default gql(
`
fragment ImageFragment on Image{
    id
    src:originalSrc
    alt:altText
    width
    height
}
fragment VariantFragment on ProductVariant {
  id
  title
  quantityAvailable
  price
  priceV2 {
    amount
    currencyCode
  }
  weight
  available: availableForSale
  sku
  compareAtPrice
  compareAtPriceV2 {
    amount
    currencyCode
  }
  image {
   ...ImageFragment
  }
  selectedOptions {
    name
    value  
  }
  unitPrice {
    amount
    currencyCode
  }
  unitPriceMeasurement {
    measuredType
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
}

fragment ProductFragment on Product {
  id
  handle
  title
  tags
  available:availableForSale
  createdAt
  updatedAt
  description
  descriptionHtml
  productType
  vendor
  publishedAt
  onlineStoreUrl
  options {
    name
    values
  }
  images(first: 250) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...ImageFragment
      }
    }
  }
  variants(first: 250) { 
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
         ...VariantFragment
      }
    }
  }
}

query ($handle: String!) {
  productByHandle(handle: $handle) {
   ...ProductFragment
  }
}
`)
