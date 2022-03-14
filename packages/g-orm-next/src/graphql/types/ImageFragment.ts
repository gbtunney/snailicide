/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ImageFragment
// ====================================================

export interface ImageFragment {
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
