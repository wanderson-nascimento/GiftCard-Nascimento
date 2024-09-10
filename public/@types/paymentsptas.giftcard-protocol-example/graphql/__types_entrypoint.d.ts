export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  IOSanitizedString: any;
  IOUpload: any;
  Upload: any;
};

export type GiftCardProvider = {
  __typename?: 'GiftCardProvider';
  serviceUrl?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<Scalars['String']>;
  preAuthEnabled?: Maybe<Scalars['Boolean']>;
  cancelEnabled?: Maybe<Scalars['Boolean']>;
};

export type GiftCardProviderInput = {
  serviceUrl?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<Scalars['String']>;
  preAuthEnabled?: Maybe<Scalars['Boolean']>;
  cancelEnabled?: Maybe<Scalars['Boolean']>;
};

export type GiftCardProviderResponse = {
  __typename?: 'GiftCardProviderResponse';
  serviceUrl?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<Scalars['String']>;
  preAuthEnabled?: Maybe<Scalars['Boolean']>;
  cancelEnabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  _self?: Maybe<Self>;
};



export type Mutation = {
  __typename?: 'Mutation';
  setGiftCardProvider?: Maybe<GiftCardProviderResponse>;
  deleteGiftCardProvider?: Maybe<GiftCardProviderResponse>;
};


export type MutationSetGiftCardProviderArgs = {
  id?: Maybe<Scalars['String']>;
  giftCardProvInput?: Maybe<GiftCardProviderInput>;
};


export type MutationDeleteGiftCardProviderArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getGiftCardProviders?: Maybe<Array<Maybe<GiftCardProvider>>>;
};

export type Self = {
  __typename?: 'Self';
  href?: Maybe<Scalars['String']>;
};

export type SelfInput = {
  href?: Maybe<Scalars['String']>;
};


export {}