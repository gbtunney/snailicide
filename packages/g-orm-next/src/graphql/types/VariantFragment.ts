/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode, UnitPriceMeasurementMeasuredType, UnitPriceMeasurementMeasuredUnit } from "./globalTypes";

// ====================================================
// GraphQL fragment: VariantFragment
// ====================================================

export interface VariantFragment_priceV2 {
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

export interface VariantFragment_compareAtPriceV2 {
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

export interface VariantFragment_image {
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

export interface VariantFragment_selectedOptions {
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

export interface VariantFragment_unitPrice {
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

export interface VariantFragment_unitPriceMeasurement {
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

export interface VariantFragment {
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
  priceV2: VariantFragment_priceV2;
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
  compareAtPriceV2: VariantFragment_compareAtPriceV2 | null;
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: VariantFragment_image | null;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: VariantFragment_selectedOptions[];
  /**
   * The unit price value for the variant based on the variant's measurement.
   */
  unitPrice: VariantFragment_unitPrice | null;
  /**
   * The unit price measurement for the variant.
   */
  unitPriceMeasurement: VariantFragment_unitPriceMeasurement | null;
}
