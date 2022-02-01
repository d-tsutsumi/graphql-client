export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Checkout = Node & {
  __typename?: 'Checkout';
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lineItems?: Maybe<LineItemConnection>;
  subtotalPriceV2?: Maybe<MoneyV2>;
  taxesIncluded?: Maybe<Scalars['Boolean']>;
  totalPriceV2?: Maybe<MoneyV2>;
  totalTaxV2?: Maybe<MoneyV2>;
  webUrl?: Maybe<Scalars['String']>;
};


export type CheckoutLineItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type CheckoutCreateInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CheckoutLineItemInput = {
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type CheckoutLineItemUpdateInput = {
  id?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type CheckoutResponse = {
  __typename?: 'CheckoutResponse';
  checkout?: Maybe<Checkout>;
  checkoutUserErrors?: Maybe<Array<Maybe<CheckoutUserError>>>;
};

export type CheckoutUserError = {
  __typename?: 'CheckoutUserError';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  originalSrc?: Maybe<Scalars['String']>;
  pageInfo: PageInfo;
  width?: Maybe<Scalars['Int']>;
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  pageInfo: PageInfo;
};

export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String'];
  node?: Maybe<Image>;
};

export type LineItem = Node & {
  __typename?: 'LineItem';
  id: Scalars['ID'];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  unityPrice?: Maybe<MoneyV2>;
  variant?: Maybe<Variant>;
};

export type LineItemConnection = {
  __typename?: 'LineItemConnection';
  edges?: Maybe<Array<Maybe<LineItemEdge>>>;
  pageInfo: PageInfo;
};

export type LineItemEdge = {
  __typename?: 'LineItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<LineItem>;
};

export type MoneyV2 = {
  __typename?: 'MoneyV2';
  amount?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  checkoutCreate?: Maybe<CheckoutResponse>;
  checkoutLineItemsAdd?: Maybe<CheckoutResponse>;
  checkoutLineItemsRemove?: Maybe<CheckoutResponse>;
  checkoutLineItemsUpdate?: Maybe<CheckoutResponse>;
};


export type MutationCheckoutCreateArgs = {
  input?: InputMaybe<CheckoutCreateInput>;
};


export type MutationCheckoutLineItemsAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lineItems?: InputMaybe<Array<InputMaybe<CheckoutLineItemInput>>>;
};


export type MutationCheckoutLineItemsRemoveArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCheckoutLineItemsUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  lineItems?: InputMaybe<Array<InputMaybe<CheckoutLineItemUpdateInput>>>;
};

export type Node = {
  id: Scalars['ID'];
};

export type Option = {
  __typename?: 'Option';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type PriceRange = {
  __typename?: 'PriceRange';
  maxVariantPrice?: Maybe<MoneyV2>;
  minVariantPrice?: Maybe<MoneyV2>;
  value?: Maybe<Scalars['Int']>;
};

export type Product = Node & {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<ImageConnection>;
  options?: Maybe<Array<Maybe<Option>>>;
  priceRange?: Maybe<PriceRange>;
  title?: Maybe<Scalars['String']>;
  variants?: Maybe<VariantConnection>;
  vendor?: Maybe<Scalars['String']>;
};


export type ProductImagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProductVariantsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  pageInfo: PageInfo;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String'];
  node?: Maybe<Product>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  displayName?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Value>>>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  node?: Maybe<Node>;
  productByHandle?: Maybe<Product>;
  products?: Maybe<ProductConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryProductByHandleArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type SelectedOption = {
  __typename?: 'SelectedOption';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Value = {
  __typename?: 'Value';
  hexColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  isDefaul?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type Variant = {
  __typename?: 'Variant';
  compareAtPriceV2?: Maybe<MoneyV2>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Image>;
  priceV2?: Maybe<MoneyV2>;
  product?: Maybe<Product>;
  selectedOptions?: Maybe<Array<Maybe<SelectedOption>>>;
  sku?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type VariantConnection = {
  __typename?: 'VariantConnection';
  edges?: Maybe<Array<Maybe<VariantEdge>>>;
  pageInfo: PageInfo;
};

export type VariantEdge = {
  __typename?: 'VariantEdge';
  cursor: Scalars['String'];
  node?: Maybe<Variant>;
};
