/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode, UnitPriceMeasurementMeasuredType, UnitPriceMeasurementMeasuredUnit } from "./globalTypes";

// ====================================================
// GraphQL query operation: productNodeQuery
// ====================================================

export interface productNodeQuery_node_AppliedGiftCard {
  __typename: "AppliedGiftCard" | "Article" | "Blog" | "Checkout" | "CheckoutLineItem" | "Collection" | "Comment" | "ExternalVideo" | "MailingAddress" | "MediaImage" | "Metafield" | "Model3d" | "Order" | "Page" | "Payment" | "ProductOption" | "ProductVariant" | "ShopPolicy" | "Video";
}

export interface productNodeQuery_node_Product_options {
  __typename: "ProductOption";
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The corresponding value to the product option name.
   */
  values: string[];
}

export interface productNodeQuery_node_Product_images_pageInfo {
  __typename: "PageInfo";
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
  /**
   * Whether there are any pages prior to the current page.
   */
  hasPreviousPage: boolean;
}

export interface productNodeQuery_node_Product_images_edges_node {
  __typename: "Image";
  /**
   * A unique identifier for the image.
   */
  id: string | null;
  /**
   * The location of the original image as a URL.
   * 
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  src: any;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  alt: string | null;
  /**
   * The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.
   */
  width: number | null;
  /**
   * The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.
   */
  height: number | null;
}

export interface productNodeQuery_node_Product_images_edges {
  __typename: "ImageEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of ImageEdge.
   */
  node: productNodeQuery_node_Product_images_edges_node;
}

export interface productNodeQuery_node_Product_images {
  __typename: "ImageConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: productNodeQuery_node_Product_images_pageInfo;
  /**
   * A list of edges.
   */
  edges: productNodeQuery_node_Product_images_edges[];
}

export interface productNodeQuery_node_Product_variants_pageInfo {
  __typename: "PageInfo";
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
  /**
   * Whether there are any pages prior to the current page.
   */
  hasPreviousPage: boolean;
}

export interface productNodeQuery_node_Product_variants_edges_node_priceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface productNodeQuery_node_Product_variants_edges_node_compareAtPriceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface productNodeQuery_node_Product_variants_edges_node_image {
  __typename: "Image";
  /**
   * A unique identifier for the image.
   */
  id: string | null;
  /**
   * The location of the original image as a URL.
   * 
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  src: any;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  alt: string | null;
  /**
   * The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.
   */
  width: number | null;
  /**
   * The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.
   */
  height: number | null;
}

export interface productNodeQuery_node_Product_variants_edges_node_selectedOptions {
  __typename: "SelectedOption";
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The product option’s value.
   */
  value: string;
}

export interface productNodeQuery_node_Product_variants_edges_node_unitPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface productNodeQuery_node_Product_variants_edges_node_unitPriceMeasurement {
  __typename: "UnitPriceMeasurement";
  /**
   * The type of unit of measurement for the unit price measurement.
   */
  measuredType: UnitPriceMeasurementMeasuredType | null;
  /**
   * The quantity unit for the unit price measurement.
   */
  quantityUnit: UnitPriceMeasurementMeasuredUnit | null;
  /**
   * The quantity value for the unit price measurement.
   */
  quantityValue: number;
  /**
   * The reference unit for the unit price measurement.
   */
  referenceUnit: UnitPriceMeasurementMeasuredUnit | null;
  /**
   * The reference value for the unit price measurement.
   */
  referenceValue: number;
}

export interface productNodeQuery_node_Product_variants_edges_node {
  __typename: "ProductVariant";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product variant’s title.
   */
  title: string;
  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  inventoryQuantity: number | null;
  /**
   * The product variant’s price.
   */
  price: any;
  /**
   * The product variant’s price.
   */
  priceV2: productNodeQuery_node_Product_variants_edges_node_priceV2;
  /**
   * The weight of the product variant in the unit system specified with `weight_unit`.
   */
  weight: number | null;
  /**
   * Indicates if the product variant is available for sale.
   */
  available: boolean;
  /**
   * The SKU (stock keeping unit) associated with the variant.
   */
  sku: string | null;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   */
  compareAtPrice: any | null;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2: productNodeQuery_node_Product_variants_edges_node_compareAtPriceV2 | null;
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: productNodeQuery_node_Product_variants_edges_node_image | null;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: productNodeQuery_node_Product_variants_edges_node_selectedOptions[];
  /**
   * The unit price value for the variant based on the variant's measurement.
   */
  unitPrice: productNodeQuery_node_Product_variants_edges_node_unitPrice | null;
  /**
   * The unit price measurement for the variant.
   */
  unitPriceMeasurement: productNodeQuery_node_Product_variants_edges_node_unitPriceMeasurement | null;
}

export interface productNodeQuery_node_Product_variants_edges {
  __typename: "ProductVariantEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: productNodeQuery_node_Product_variants_edges_node;
}

export interface productNodeQuery_node_Product_variants {
  __typename: "ProductVariantConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: productNodeQuery_node_Product_variants_pageInfo;
  /**
   * A list of edges.
   */
  edges: productNodeQuery_node_Product_variants_edges[];
}

export interface productNodeQuery_node_Product {
  __typename: "Product";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: string[];
  /**
   * Indicates if at least one product variant is available for sale.
   */
  available: boolean;
  /**
   * The date and time when the product was created.
   */
  createdAt: any;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: any;
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml: any;
  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   */
  productType: string;
  /**
   * The product’s vendor name.
   */
  vendor: string;
  /**
   * The date and time when the product was published to the channel.
   */
  publishedAt: any;
  /**
   * The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.
   */
  onlineStoreUrl: any | null;
  /**
   * List of product options.
   */
  options: productNodeQuery_node_Product_options[];
  /**
   * List of images associated with the product.
   */
  images: productNodeQuery_node_Product_images;
  /**
   * List of the product’s variants.
   */
  variants: productNodeQuery_node_Product_variants;
}

export type productNodeQuery_node = productNodeQuery_node_AppliedGiftCard | productNodeQuery_node_Product;

export interface productNodeQuery {
  /**
   * Returns a specific node by ID.
   */
  node: productNodeQuery_node | null;
}

export interface productNodeQueryVariables {
  id: string;
}
