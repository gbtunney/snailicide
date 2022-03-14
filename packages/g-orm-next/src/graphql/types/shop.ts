/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: shop
// ====================================================

export interface shop_shop_paymentSettings {
  __typename: "PaymentSettings";
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   */
  enabledPresentmentCurrencies: CurrencyCode[];
}

export interface shop_shop_primaryDomain {
  __typename: "Domain";
  /**
   * The host name of the domain (eg: `example.com`).
   */
  host: string;
  /**
   * Whether SSL is enabled or not.
   */
  sslEnabled: boolean;
  /**
   * The URL of the domain (eg: `https: // example.com`).
   */
  url: any;
}

export interface shop_shop {
  __typename: "Shop";
  /**
   * Settings related to payments.
   */
  paymentSettings: shop_shop_paymentSettings;
  /**
   * A description of the shop.
   */
  description: string | null;
  /**
   * A string representing the way currency is formatted when the currency isn’t specified.
   */
  moneyFormat: string;
  /**
   * The shop’s name.
   */
  name: string;
  /**
   * The shop’s primary domain.
   */
  primaryDomain: shop_shop_primaryDomain;
}

export interface shop {
  /**
   * The shop associated with the storefront access token.
   */
  shop: shop_shop;
}
