import gql from 'graphql-tag';
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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Pet */
export type Animal = Node & {
  __typename?: 'Animal';
  born?: Maybe<Scalars['Date']>;
  breeder?: Maybe<Breeder>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Animal>;
  events?: Maybe<AnimalEvents>;
  /** List of Animal versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sex: Sex;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Pet */
export type AnimalBreederArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Pet */
export type AnimalCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Pet */
export type AnimalDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Pet */
export type AnimalEventsArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Pet */
export type AnimalHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Pet */
export type AnimalPhotoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Pet */
export type AnimalPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Pet */
export type AnimalScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Pet */
export type AnimalUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AnimalConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AnimalWhereUniqueInput;
};

/** A connection to a list of items. */
export type AnimalConnection = {
  __typename?: 'AnimalConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AnimalEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AnimalCreateInput = {
  born?: InputMaybe<Scalars['Date']>;
  breeder?: InputMaybe<BreederCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<AnimalEventsCreateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetCreateOneInlineInput>;
  sex: Sex;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AnimalCreateManyInlineInput = {
  /** Connect multiple existing Animal documents */
  connect?: InputMaybe<Array<AnimalWhereUniqueInput>>;
  /** Create and connect multiple existing Animal documents */
  create?: InputMaybe<Array<AnimalCreateInput>>;
};

export type AnimalCreateOneInlineInput = {
  /** Connect one existing Animal document */
  connect?: InputMaybe<AnimalWhereUniqueInput>;
  /** Create and connect one Animal document */
  create?: InputMaybe<AnimalCreateInput>;
};

/** An edge in a connection. */
export type AnimalEdge = {
  __typename?: 'AnimalEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Animal;
};

export type AnimalEvents = LogEvent;

export type AnimalEventsConnectInput = {
  LogEvent?: InputMaybe<LogEventConnectInput>;
};

export type AnimalEventsCreateInput = {
  LogEvent?: InputMaybe<LogEventCreateInput>;
};

export type AnimalEventsCreateManyInlineInput = {
  /** Connect multiple existing AnimalEvents documents */
  connect?: InputMaybe<Array<AnimalEventsWhereUniqueInput>>;
  /** Create and connect multiple existing AnimalEvents documents */
  create?: InputMaybe<Array<AnimalEventsCreateInput>>;
};

export type AnimalEventsCreateOneInlineInput = {
  /** Connect one existing AnimalEvents document */
  connect?: InputMaybe<AnimalEventsWhereUniqueInput>;
  /** Create and connect one AnimalEvents document */
  create?: InputMaybe<AnimalEventsCreateInput>;
};

export type AnimalEventsUpdateInput = {
  LogEvent?: InputMaybe<LogEventUpdateInput>;
};

export type AnimalEventsUpdateManyInlineInput = {
  /** Connect multiple existing AnimalEvents documents */
  connect?: InputMaybe<Array<AnimalEventsConnectInput>>;
  /** Create and connect multiple AnimalEvents documents */
  create?: InputMaybe<Array<AnimalEventsCreateInput>>;
  /** Delete multiple AnimalEvents documents */
  delete?: InputMaybe<Array<AnimalEventsWhereUniqueInput>>;
  /** Disconnect multiple AnimalEvents documents */
  disconnect?: InputMaybe<Array<AnimalEventsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AnimalEvents documents */
  set?: InputMaybe<Array<AnimalEventsWhereUniqueInput>>;
  /** Update multiple AnimalEvents documents */
  update?: InputMaybe<Array<AnimalEventsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AnimalEvents documents */
  upsert?: InputMaybe<Array<AnimalEventsUpsertWithNestedWhereUniqueInput>>;
};

export type AnimalEventsUpdateManyWithNestedWhereInput = {
  LogEvent?: InputMaybe<LogEventUpdateManyWithNestedWhereInput>;
};

export type AnimalEventsUpdateOneInlineInput = {
  /** Connect existing AnimalEvents document */
  connect?: InputMaybe<AnimalEventsWhereUniqueInput>;
  /** Create and connect one AnimalEvents document */
  create?: InputMaybe<AnimalEventsCreateInput>;
  /** Delete currently connected AnimalEvents document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AnimalEvents document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AnimalEvents document */
  update?: InputMaybe<AnimalEventsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AnimalEvents document */
  upsert?: InputMaybe<AnimalEventsUpsertWithNestedWhereUniqueInput>;
};

export type AnimalEventsUpdateWithNestedWhereUniqueInput = {
  LogEvent?: InputMaybe<LogEventUpdateWithNestedWhereUniqueInput>;
};

export type AnimalEventsUpsertWithNestedWhereUniqueInput = {
  LogEvent?: InputMaybe<LogEventUpsertWithNestedWhereUniqueInput>;
};

export type AnimalEventsWhereInput = {
  LogEvent?: InputMaybe<LogEventWhereInput>;
};

export type AnimalEventsWhereUniqueInput = {
  LogEvent?: InputMaybe<LogEventWhereUniqueInput>;
};

/** Identifies documents */
export type AnimalManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AnimalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AnimalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AnimalWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  born?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  born_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  born_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  born_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  born_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  born_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  born_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  born_not_in?: InputMaybe<Array<Scalars['Date']>>;
  breeder?: InputMaybe<BreederWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sex?: InputMaybe<Sex>;
  /** All values that are contained in given list. */
  sex_in?: InputMaybe<Array<Sex>>;
  /** All values that are not equal to given value. */
  sex_not?: InputMaybe<Sex>;
  /** All values that are not contained in given list. */
  sex_not_in?: InputMaybe<Array<Sex>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AnimalOrderByInput {
  BornAsc = 'born_ASC',
  BornDesc = 'born_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SexAsc = 'sex_ASC',
  SexDesc = 'sex_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AnimalUpdateInput = {
  born?: InputMaybe<Scalars['Date']>;
  breeder?: InputMaybe<BreederUpdateOneInlineInput>;
  events?: InputMaybe<AnimalEventsUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetUpdateOneInlineInput>;
  sex?: InputMaybe<Sex>;
};

export type AnimalUpdateManyInlineInput = {
  /** Connect multiple existing Animal documents */
  connect?: InputMaybe<Array<AnimalConnectInput>>;
  /** Create and connect multiple Animal documents */
  create?: InputMaybe<Array<AnimalCreateInput>>;
  /** Delete multiple Animal documents */
  delete?: InputMaybe<Array<AnimalWhereUniqueInput>>;
  /** Disconnect multiple Animal documents */
  disconnect?: InputMaybe<Array<AnimalWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Animal documents */
  set?: InputMaybe<Array<AnimalWhereUniqueInput>>;
  /** Update multiple Animal documents */
  update?: InputMaybe<Array<AnimalUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Animal documents */
  upsert?: InputMaybe<Array<AnimalUpsertWithNestedWhereUniqueInput>>;
};

export type AnimalUpdateManyInput = {
  born?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Sex>;
};

export type AnimalUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AnimalUpdateManyInput;
  /** Document search */
  where: AnimalWhereInput;
};

export type AnimalUpdateOneInlineInput = {
  /** Connect existing Animal document */
  connect?: InputMaybe<AnimalWhereUniqueInput>;
  /** Create and connect one Animal document */
  create?: InputMaybe<AnimalCreateInput>;
  /** Delete currently connected Animal document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Animal document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Animal document */
  update?: InputMaybe<AnimalUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Animal document */
  upsert?: InputMaybe<AnimalUpsertWithNestedWhereUniqueInput>;
};

export type AnimalUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AnimalUpdateInput;
  /** Unique document search */
  where: AnimalWhereUniqueInput;
};

export type AnimalUpsertInput = {
  /** Create document if it didn't exist */
  create: AnimalCreateInput;
  /** Update document if it exists */
  update: AnimalUpdateInput;
};

export type AnimalUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AnimalUpsertInput;
  /** Unique document search */
  where: AnimalWhereUniqueInput;
};

/** Identifies documents */
export type AnimalWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AnimalWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AnimalWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AnimalWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  born?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  born_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  born_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  born_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  born_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  born_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  born_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  born_not_in?: InputMaybe<Array<Scalars['Date']>>;
  breeder?: InputMaybe<BreederWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sex?: InputMaybe<Sex>;
  /** All values that are contained in given list. */
  sex_in?: InputMaybe<Array<Sex>>;
  /** All values that are not equal to given value. */
  sex_not?: InputMaybe<Sex>;
  /** All values that are not contained in given list. */
  sex_not_in?: InputMaybe<Array<Sex>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Animal record uniquely */
export type AnimalWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageProduct: Array<Product>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  photoAnimal: Array<Animal>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageProductArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPhotoAnimalArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AnimalOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnimalWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageProduct?: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  photoAnimal?: InputMaybe<AnimalCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  photoAnimal_every?: InputMaybe<AnimalWhereInput>;
  photoAnimal_none?: InputMaybe<AnimalWhereInput>;
  photoAnimal_some?: InputMaybe<AnimalWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageProduct?: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  photoAnimal?: InputMaybe<AnimalUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  photoAnimal_every?: InputMaybe<AnimalWhereInput>;
  photoAnimal_none?: InputMaybe<AnimalWhereInput>;
  photoAnimal_some?: InputMaybe<AnimalWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** person you purchased animal from */
export type Breeder = Node & {
  __typename?: 'Breeder';
  address?: Maybe<Location>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Breeder>;
  /** email address */
  email?: Maybe<Scalars['String']>;
  /** List of Breeder versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** source/breeder name */
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  web?: Maybe<Scalars['String']>;
};


/** person you purchased animal from */
export type BreederCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** person you purchased animal from */
export type BreederDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** person you purchased animal from */
export type BreederHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** person you purchased animal from */
export type BreederPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** person you purchased animal from */
export type BreederScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** person you purchased animal from */
export type BreederUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BreederConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BreederWhereUniqueInput;
};

/** A connection to a list of items. */
export type BreederConnection = {
  __typename?: 'BreederConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BreederEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BreederCreateInput = {
  address?: InputMaybe<LocationInput>;
  ckyjc3nqb0yjs01yyh7dveenf?: InputMaybe<AnimalCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  web?: InputMaybe<Scalars['String']>;
};

export type BreederCreateManyInlineInput = {
  /** Connect multiple existing Breeder documents */
  connect?: InputMaybe<Array<BreederWhereUniqueInput>>;
  /** Create and connect multiple existing Breeder documents */
  create?: InputMaybe<Array<BreederCreateInput>>;
};

export type BreederCreateOneInlineInput = {
  /** Connect one existing Breeder document */
  connect?: InputMaybe<BreederWhereUniqueInput>;
  /** Create and connect one Breeder document */
  create?: InputMaybe<BreederCreateInput>;
};

/** An edge in a connection. */
export type BreederEdge = {
  __typename?: 'BreederEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Breeder;
};

/** Identifies documents */
export type BreederManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BreederWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BreederWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BreederWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  web?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  web_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  web_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  web_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  web_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  web_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  web_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  web_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  web_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  web_starts_with?: InputMaybe<Scalars['String']>;
};

export enum BreederOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebAsc = 'web_ASC',
  WebDesc = 'web_DESC'
}

export type BreederUpdateInput = {
  address?: InputMaybe<LocationInput>;
  ckyjc3nqb0yjs01yyh7dveenf?: InputMaybe<AnimalUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type BreederUpdateManyInlineInput = {
  /** Connect multiple existing Breeder documents */
  connect?: InputMaybe<Array<BreederConnectInput>>;
  /** Create and connect multiple Breeder documents */
  create?: InputMaybe<Array<BreederCreateInput>>;
  /** Delete multiple Breeder documents */
  delete?: InputMaybe<Array<BreederWhereUniqueInput>>;
  /** Disconnect multiple Breeder documents */
  disconnect?: InputMaybe<Array<BreederWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Breeder documents */
  set?: InputMaybe<Array<BreederWhereUniqueInput>>;
  /** Update multiple Breeder documents */
  update?: InputMaybe<Array<BreederUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Breeder documents */
  upsert?: InputMaybe<Array<BreederUpsertWithNestedWhereUniqueInput>>;
};

export type BreederUpdateManyInput = {
  address?: InputMaybe<LocationInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type BreederUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BreederUpdateManyInput;
  /** Document search */
  where: BreederWhereInput;
};

export type BreederUpdateOneInlineInput = {
  /** Connect existing Breeder document */
  connect?: InputMaybe<BreederWhereUniqueInput>;
  /** Create and connect one Breeder document */
  create?: InputMaybe<BreederCreateInput>;
  /** Delete currently connected Breeder document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Breeder document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Breeder document */
  update?: InputMaybe<BreederUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Breeder document */
  upsert?: InputMaybe<BreederUpsertWithNestedWhereUniqueInput>;
};

export type BreederUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BreederUpdateInput;
  /** Unique document search */
  where: BreederWhereUniqueInput;
};

export type BreederUpsertInput = {
  /** Create document if it didn't exist */
  create: BreederCreateInput;
  /** Update document if it exists */
  update: BreederUpdateInput;
};

export type BreederUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BreederUpsertInput;
  /** Unique document search */
  where: BreederWhereUniqueInput;
};

/** Identifies documents */
export type BreederWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BreederWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BreederWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BreederWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  web?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  web_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  web_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  web_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  web_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  web_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  web_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  web_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  web_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  web_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Breeder record uniquely */
export type BreederWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

/** tank dimensions test */
export type Dimension = Node & {
  __typename?: 'Dimension';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Dimension>;
  enclosure?: Maybe<Enclosure>;
  height?: Maybe<Scalars['Int']>;
  /** List of Dimension versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  length?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  width?: Maybe<Scalars['Int']>;
};


/** tank dimensions test */
export type DimensionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** tank dimensions test */
export type DimensionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** tank dimensions test */
export type DimensionEnclosureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** tank dimensions test */
export type DimensionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** tank dimensions test */
export type DimensionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** tank dimensions test */
export type DimensionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** tank dimensions test */
export type DimensionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type DimensionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DimensionWhereUniqueInput;
};

/** A connection to a list of items. */
export type DimensionConnection = {
  __typename?: 'DimensionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DimensionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DimensionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  enclosure?: InputMaybe<EnclosureCreateOneInlineInput>;
  height?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type DimensionCreateManyInlineInput = {
  /** Connect multiple existing Dimension documents */
  connect?: InputMaybe<Array<DimensionWhereUniqueInput>>;
  /** Create and connect multiple existing Dimension documents */
  create?: InputMaybe<Array<DimensionCreateInput>>;
};

export type DimensionCreateOneInlineInput = {
  /** Connect one existing Dimension document */
  connect?: InputMaybe<DimensionWhereUniqueInput>;
  /** Create and connect one Dimension document */
  create?: InputMaybe<DimensionCreateInput>;
};

/** An edge in a connection. */
export type DimensionEdge = {
  __typename?: 'DimensionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dimension;
};

/** Identifies documents */
export type DimensionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DimensionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DimensionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DimensionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enclosure?: InputMaybe<EnclosureWhereInput>;
  height?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  length?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  length_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  length_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  length_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  length_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  length_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  length_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  length_not_in?: InputMaybe<Array<Scalars['Int']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum DimensionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type DimensionUpdateInput = {
  enclosure?: InputMaybe<EnclosureUpdateOneInlineInput>;
  height?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type DimensionUpdateManyInlineInput = {
  /** Connect multiple existing Dimension documents */
  connect?: InputMaybe<Array<DimensionConnectInput>>;
  /** Create and connect multiple Dimension documents */
  create?: InputMaybe<Array<DimensionCreateInput>>;
  /** Delete multiple Dimension documents */
  delete?: InputMaybe<Array<DimensionWhereUniqueInput>>;
  /** Disconnect multiple Dimension documents */
  disconnect?: InputMaybe<Array<DimensionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Dimension documents */
  set?: InputMaybe<Array<DimensionWhereUniqueInput>>;
  /** Update multiple Dimension documents */
  update?: InputMaybe<Array<DimensionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Dimension documents */
  upsert?: InputMaybe<Array<DimensionUpsertWithNestedWhereUniqueInput>>;
};

export type DimensionUpdateManyInput = {
  height?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type DimensionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DimensionUpdateManyInput;
  /** Document search */
  where: DimensionWhereInput;
};

export type DimensionUpdateOneInlineInput = {
  /** Connect existing Dimension document */
  connect?: InputMaybe<DimensionWhereUniqueInput>;
  /** Create and connect one Dimension document */
  create?: InputMaybe<DimensionCreateInput>;
  /** Delete currently connected Dimension document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Dimension document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Dimension document */
  update?: InputMaybe<DimensionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Dimension document */
  upsert?: InputMaybe<DimensionUpsertWithNestedWhereUniqueInput>;
};

export type DimensionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DimensionUpdateInput;
  /** Unique document search */
  where: DimensionWhereUniqueInput;
};

export type DimensionUpsertInput = {
  /** Create document if it didn't exist */
  create: DimensionCreateInput;
  /** Update document if it exists */
  update: DimensionUpdateInput;
};

export type DimensionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DimensionUpsertInput;
  /** Unique document search */
  where: DimensionWhereUniqueInput;
};

/** Identifies documents */
export type DimensionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DimensionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DimensionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DimensionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enclosure?: InputMaybe<EnclosureWhereInput>;
  height?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  length?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  length_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  length_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  length_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  length_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  length_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  length_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  length_not_in?: InputMaybe<Array<Scalars['Int']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References Dimension record uniquely */
export type DimensionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Enclosure = Node & {
  __typename?: 'Enclosure';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Enclosure>;
  enclosure_dimensions?: Maybe<EnclosureEnclosure_Dimensions>;
  /** List of Enclosure versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  setupdate?: Maybe<Scalars['Date']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EnclosureCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type EnclosureDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EnclosureEnclosure_DimensionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type EnclosureHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EnclosurePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type EnclosureScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EnclosureUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type EnclosureConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EnclosureWhereUniqueInput;
};

/** A connection to a list of items. */
export type EnclosureConnection = {
  __typename?: 'EnclosureConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EnclosureEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EnclosureCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  enclosure_dimensions?: InputMaybe<EnclosureEnclosure_DimensionsCreateOneInlineInput>;
  identifier?: InputMaybe<Scalars['String']>;
  setupdate?: InputMaybe<Scalars['Date']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EnclosureCreateManyInlineInput = {
  /** Connect multiple existing Enclosure documents */
  connect?: InputMaybe<Array<EnclosureWhereUniqueInput>>;
  /** Create and connect multiple existing Enclosure documents */
  create?: InputMaybe<Array<EnclosureCreateInput>>;
};

export type EnclosureCreateOneInlineInput = {
  /** Connect one existing Enclosure document */
  connect?: InputMaybe<EnclosureWhereUniqueInput>;
  /** Create and connect one Enclosure document */
  create?: InputMaybe<EnclosureCreateInput>;
};

/** An edge in a connection. */
export type EnclosureEdge = {
  __typename?: 'EnclosureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Enclosure;
};

export type EnclosureEnclosure_Dimensions = Dimension | Volume;

export type EnclosureEnclosure_DimensionsConnectInput = {
  Dimension?: InputMaybe<DimensionConnectInput>;
  Volume?: InputMaybe<VolumeConnectInput>;
};

export type EnclosureEnclosure_DimensionsCreateInput = {
  Dimension?: InputMaybe<DimensionCreateInput>;
  Volume?: InputMaybe<VolumeCreateInput>;
};

export type EnclosureEnclosure_DimensionsCreateManyInlineInput = {
  /** Connect multiple existing EnclosureEnclosure_dimensions documents */
  connect?: InputMaybe<Array<EnclosureEnclosure_DimensionsWhereUniqueInput>>;
  /** Create and connect multiple existing EnclosureEnclosure_dimensions documents */
  create?: InputMaybe<Array<EnclosureEnclosure_DimensionsCreateInput>>;
};

export type EnclosureEnclosure_DimensionsCreateOneInlineInput = {
  /** Connect one existing EnclosureEnclosure_dimensions document */
  connect?: InputMaybe<EnclosureEnclosure_DimensionsWhereUniqueInput>;
  /** Create and connect one EnclosureEnclosure_dimensions document */
  create?: InputMaybe<EnclosureEnclosure_DimensionsCreateInput>;
};

export type EnclosureEnclosure_DimensionsUpdateInput = {
  Dimension?: InputMaybe<DimensionUpdateInput>;
  Volume?: InputMaybe<VolumeUpdateInput>;
};

export type EnclosureEnclosure_DimensionsUpdateManyInlineInput = {
  /** Connect multiple existing EnclosureEnclosure_dimensions documents */
  connect?: InputMaybe<Array<EnclosureEnclosure_DimensionsConnectInput>>;
  /** Create and connect multiple EnclosureEnclosure_dimensions documents */
  create?: InputMaybe<Array<EnclosureEnclosure_DimensionsCreateInput>>;
  /** Delete multiple EnclosureEnclosure_dimensions documents */
  delete?: InputMaybe<Array<EnclosureEnclosure_DimensionsWhereUniqueInput>>;
  /** Disconnect multiple EnclosureEnclosure_dimensions documents */
  disconnect?: InputMaybe<Array<EnclosureEnclosure_DimensionsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EnclosureEnclosure_dimensions documents */
  set?: InputMaybe<Array<EnclosureEnclosure_DimensionsWhereUniqueInput>>;
  /** Update multiple EnclosureEnclosure_dimensions documents */
  update?: InputMaybe<Array<EnclosureEnclosure_DimensionsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EnclosureEnclosure_dimensions documents */
  upsert?: InputMaybe<Array<EnclosureEnclosure_DimensionsUpsertWithNestedWhereUniqueInput>>;
};

export type EnclosureEnclosure_DimensionsUpdateManyWithNestedWhereInput = {
  Dimension?: InputMaybe<DimensionUpdateManyWithNestedWhereInput>;
  Volume?: InputMaybe<VolumeUpdateManyWithNestedWhereInput>;
};

export type EnclosureEnclosure_DimensionsUpdateOneInlineInput = {
  /** Connect existing EnclosureEnclosure_dimensions document */
  connect?: InputMaybe<EnclosureEnclosure_DimensionsWhereUniqueInput>;
  /** Create and connect one EnclosureEnclosure_dimensions document */
  create?: InputMaybe<EnclosureEnclosure_DimensionsCreateInput>;
  /** Delete currently connected EnclosureEnclosure_dimensions document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EnclosureEnclosure_dimensions document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EnclosureEnclosure_dimensions document */
  update?: InputMaybe<EnclosureEnclosure_DimensionsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EnclosureEnclosure_dimensions document */
  upsert?: InputMaybe<EnclosureEnclosure_DimensionsUpsertWithNestedWhereUniqueInput>;
};

export type EnclosureEnclosure_DimensionsUpdateWithNestedWhereUniqueInput = {
  Dimension?: InputMaybe<DimensionUpdateWithNestedWhereUniqueInput>;
  Volume?: InputMaybe<VolumeUpdateWithNestedWhereUniqueInput>;
};

export type EnclosureEnclosure_DimensionsUpsertWithNestedWhereUniqueInput = {
  Dimension?: InputMaybe<DimensionUpsertWithNestedWhereUniqueInput>;
  Volume?: InputMaybe<VolumeUpsertWithNestedWhereUniqueInput>;
};

export type EnclosureEnclosure_DimensionsWhereInput = {
  Dimension?: InputMaybe<DimensionWhereInput>;
  Volume?: InputMaybe<VolumeWhereInput>;
};

export type EnclosureEnclosure_DimensionsWhereUniqueInput = {
  Dimension?: InputMaybe<DimensionWhereUniqueInput>;
  Volume?: InputMaybe<VolumeWhereUniqueInput>;
};

/** Identifies documents */
export type EnclosureManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setupdate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  setupdate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  setupdate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  setupdate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  setupdate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  setupdate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  setupdate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  setupdate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EnclosureOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SetupdateAsc = 'setupdate_ASC',
  SetupdateDesc = 'setupdate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EnclosureUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  enclosure_dimensions?: InputMaybe<EnclosureEnclosure_DimensionsUpdateOneInlineInput>;
  identifier?: InputMaybe<Scalars['String']>;
  setupdate?: InputMaybe<Scalars['Date']>;
};

export type EnclosureUpdateManyInlineInput = {
  /** Connect multiple existing Enclosure documents */
  connect?: InputMaybe<Array<EnclosureConnectInput>>;
  /** Create and connect multiple Enclosure documents */
  create?: InputMaybe<Array<EnclosureCreateInput>>;
  /** Delete multiple Enclosure documents */
  delete?: InputMaybe<Array<EnclosureWhereUniqueInput>>;
  /** Disconnect multiple Enclosure documents */
  disconnect?: InputMaybe<Array<EnclosureWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Enclosure documents */
  set?: InputMaybe<Array<EnclosureWhereUniqueInput>>;
  /** Update multiple Enclosure documents */
  update?: InputMaybe<Array<EnclosureUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Enclosure documents */
  upsert?: InputMaybe<Array<EnclosureUpsertWithNestedWhereUniqueInput>>;
};

export type EnclosureUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  setupdate?: InputMaybe<Scalars['Date']>;
};

export type EnclosureUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EnclosureUpdateManyInput;
  /** Document search */
  where: EnclosureWhereInput;
};

export type EnclosureUpdateOneInlineInput = {
  /** Connect existing Enclosure document */
  connect?: InputMaybe<EnclosureWhereUniqueInput>;
  /** Create and connect one Enclosure document */
  create?: InputMaybe<EnclosureCreateInput>;
  /** Delete currently connected Enclosure document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Enclosure document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Enclosure document */
  update?: InputMaybe<EnclosureUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Enclosure document */
  upsert?: InputMaybe<EnclosureUpsertWithNestedWhereUniqueInput>;
};

export type EnclosureUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EnclosureUpdateInput;
  /** Unique document search */
  where: EnclosureWhereUniqueInput;
};

export type EnclosureUpsertInput = {
  /** Create document if it didn't exist */
  create: EnclosureCreateInput;
  /** Update document if it exists */
  update: EnclosureUpdateInput;
};

export type EnclosureUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EnclosureUpsertInput;
  /** Unique document search */
  where: EnclosureWhereUniqueInput;
};

/** Identifies documents */
export type EnclosureWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EnclosureWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  identifier_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  identifier_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  identifier_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  identifier_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  identifier_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  identifier_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  identifier_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  identifier_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  identifier_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setupdate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  setupdate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  setupdate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  setupdate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  setupdate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  setupdate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  setupdate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  setupdate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Enclosure record uniquely */
export type EnclosureWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Equiptment = Node & {
  __typename?: 'Equiptment';
  awsDump?: Maybe<Scalars['Json']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Equiptment>;
  /** List of Equiptment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EquiptmentCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type EquiptmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EquiptmentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EquiptmentPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type EquiptmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EquiptmentUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type EquiptmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EquiptmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type EquiptmentConnection = {
  __typename?: 'EquiptmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EquiptmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EquiptmentCreateInput = {
  awsDump?: InputMaybe<Scalars['Json']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EquiptmentCreateManyInlineInput = {
  /** Connect multiple existing Equiptment documents */
  connect?: InputMaybe<Array<EquiptmentWhereUniqueInput>>;
  /** Create and connect multiple existing Equiptment documents */
  create?: InputMaybe<Array<EquiptmentCreateInput>>;
};

export type EquiptmentCreateOneInlineInput = {
  /** Connect one existing Equiptment document */
  connect?: InputMaybe<EquiptmentWhereUniqueInput>;
  /** Create and connect one Equiptment document */
  create?: InputMaybe<EquiptmentCreateInput>;
};

/** An edge in a connection. */
export type EquiptmentEdge = {
  __typename?: 'EquiptmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Equiptment;
};

/** Identifies documents */
export type EquiptmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EquiptmentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EquiptmentUpdateInput = {
  awsDump?: InputMaybe<Scalars['Json']>;
};

export type EquiptmentUpdateManyInlineInput = {
  /** Connect multiple existing Equiptment documents */
  connect?: InputMaybe<Array<EquiptmentConnectInput>>;
  /** Create and connect multiple Equiptment documents */
  create?: InputMaybe<Array<EquiptmentCreateInput>>;
  /** Delete multiple Equiptment documents */
  delete?: InputMaybe<Array<EquiptmentWhereUniqueInput>>;
  /** Disconnect multiple Equiptment documents */
  disconnect?: InputMaybe<Array<EquiptmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Equiptment documents */
  set?: InputMaybe<Array<EquiptmentWhereUniqueInput>>;
  /** Update multiple Equiptment documents */
  update?: InputMaybe<Array<EquiptmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Equiptment documents */
  upsert?: InputMaybe<Array<EquiptmentUpsertWithNestedWhereUniqueInput>>;
};

export type EquiptmentUpdateManyInput = {
  awsDump?: InputMaybe<Scalars['Json']>;
};

export type EquiptmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EquiptmentUpdateManyInput;
  /** Document search */
  where: EquiptmentWhereInput;
};

export type EquiptmentUpdateOneInlineInput = {
  /** Connect existing Equiptment document */
  connect?: InputMaybe<EquiptmentWhereUniqueInput>;
  /** Create and connect one Equiptment document */
  create?: InputMaybe<EquiptmentCreateInput>;
  /** Delete currently connected Equiptment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Equiptment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Equiptment document */
  update?: InputMaybe<EquiptmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Equiptment document */
  upsert?: InputMaybe<EquiptmentUpsertWithNestedWhereUniqueInput>;
};

export type EquiptmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EquiptmentUpdateInput;
  /** Unique document search */
  where: EquiptmentWhereUniqueInput;
};

export type EquiptmentUpsertInput = {
  /** Create document if it didn't exist */
  create: EquiptmentCreateInput;
  /** Update document if it exists */
  update: EquiptmentUpdateInput;
};

export type EquiptmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EquiptmentUpsertInput;
  /** Unique document search */
  where: EquiptmentWhereUniqueInput;
};

/** Identifies documents */
export type EquiptmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EquiptmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Equiptment record uniquely */
export type EquiptmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export enum LogCategories {
  Food = 'food',
  Length = 'length',
  Note = 'note',
  Weight = 'weight'
}

export type LogEvent = Node & {
  __typename?: 'LogEvent';
  animal?: Maybe<Animal>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<LogEvent>;
  /** List of LogEvent versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  measurement?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  type?: Maybe<LogCategories>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /**
   *
   *
   *
   */
  value?: Maybe<Scalars['String']>;
};


export type LogEventAnimalArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LogEventCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LogEventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LogEventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LogEventPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LogEventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LogEventUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LogEventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LogEventWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogEventConnection = {
  __typename?: 'LogEventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LogEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LogEventCreateInput = {
  animal?: InputMaybe<AnimalCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  measurement?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<LogCategories>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['String']>;
};

export type LogEventCreateManyInlineInput = {
  /** Connect multiple existing LogEvent documents */
  connect?: InputMaybe<Array<LogEventWhereUniqueInput>>;
  /** Create and connect multiple existing LogEvent documents */
  create?: InputMaybe<Array<LogEventCreateInput>>;
};

export type LogEventCreateOneInlineInput = {
  /** Connect one existing LogEvent document */
  connect?: InputMaybe<LogEventWhereUniqueInput>;
  /** Create and connect one LogEvent document */
  create?: InputMaybe<LogEventCreateInput>;
};

/** An edge in a connection. */
export type LogEventEdge = {
  __typename?: 'LogEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LogEvent;
};

/** Identifies documents */
export type LogEventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  animal?: InputMaybe<AnimalWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  measurement?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  measurement_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  measurement_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  measurement_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  measurement_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  measurement_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  measurement_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  measurement_not_in?: InputMaybe<Array<Scalars['Int']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  type?: InputMaybe<LogCategories>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<LogCategories>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<LogCategories>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<LogCategories>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LogEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeasurementAsc = 'measurement_ASC',
  MeasurementDesc = 'measurement_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type LogEventUpdateInput = {
  animal?: InputMaybe<AnimalUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  measurement?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<LogCategories>;
  value?: InputMaybe<Scalars['String']>;
};

export type LogEventUpdateManyInlineInput = {
  /** Connect multiple existing LogEvent documents */
  connect?: InputMaybe<Array<LogEventConnectInput>>;
  /** Create and connect multiple LogEvent documents */
  create?: InputMaybe<Array<LogEventCreateInput>>;
  /** Delete multiple LogEvent documents */
  delete?: InputMaybe<Array<LogEventWhereUniqueInput>>;
  /** Disconnect multiple LogEvent documents */
  disconnect?: InputMaybe<Array<LogEventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LogEvent documents */
  set?: InputMaybe<Array<LogEventWhereUniqueInput>>;
  /** Update multiple LogEvent documents */
  update?: InputMaybe<Array<LogEventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LogEvent documents */
  upsert?: InputMaybe<Array<LogEventUpsertWithNestedWhereUniqueInput>>;
};

export type LogEventUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  measurement?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<LogCategories>;
  value?: InputMaybe<Scalars['String']>;
};

export type LogEventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LogEventUpdateManyInput;
  /** Document search */
  where: LogEventWhereInput;
};

export type LogEventUpdateOneInlineInput = {
  /** Connect existing LogEvent document */
  connect?: InputMaybe<LogEventWhereUniqueInput>;
  /** Create and connect one LogEvent document */
  create?: InputMaybe<LogEventCreateInput>;
  /** Delete currently connected LogEvent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LogEvent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LogEvent document */
  update?: InputMaybe<LogEventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LogEvent document */
  upsert?: InputMaybe<LogEventUpsertWithNestedWhereUniqueInput>;
};

export type LogEventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LogEventUpdateInput;
  /** Unique document search */
  where: LogEventWhereUniqueInput;
};

export type LogEventUpsertInput = {
  /** Create document if it didn't exist */
  create: LogEventCreateInput;
  /** Update document if it exists */
  update: LogEventUpdateInput;
};

export type LogEventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LogEventUpsertInput;
  /** Unique document search */
  where: LogEventWhereUniqueInput;
};

/** Identifies documents */
export type LogEventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  animal?: InputMaybe<AnimalWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  measurement?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  measurement_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  measurement_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  measurement_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  measurement_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  measurement_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  measurement_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  measurement_not_in?: InputMaybe<Array<Scalars['Int']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  type?: InputMaybe<LogCategories>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<LogCategories>>;
  /** All values that are not equal to given value. */
  type_not?: InputMaybe<LogCategories>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<LogCategories>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

/** References LogEvent record uniquely */
export type LogEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one animal */
  createAnimal?: Maybe<Animal>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one breeder */
  createBreeder?: Maybe<Breeder>;
  /** Create one dimension */
  createDimension?: Maybe<Dimension>;
  /** Create one enclosure */
  createEnclosure?: Maybe<Enclosure>;
  /** Create one equiptment */
  createEquiptment?: Maybe<Equiptment>;
  /** Create one logEvent */
  createLogEvent?: Maybe<LogEvent>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one volume */
  createVolume?: Maybe<Volume>;
  /** Delete one animal from _all_ existing stages. Returns deleted document. */
  deleteAnimal?: Maybe<Animal>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one breeder from _all_ existing stages. Returns deleted document. */
  deleteBreeder?: Maybe<Breeder>;
  /** Delete one dimension from _all_ existing stages. Returns deleted document. */
  deleteDimension?: Maybe<Dimension>;
  /** Delete one enclosure from _all_ existing stages. Returns deleted document. */
  deleteEnclosure?: Maybe<Enclosure>;
  /** Delete one equiptment from _all_ existing stages. Returns deleted document. */
  deleteEquiptment?: Maybe<Equiptment>;
  /** Delete one logEvent from _all_ existing stages. Returns deleted document. */
  deleteLogEvent?: Maybe<LogEvent>;
  /**
   * Delete many Animal documents
   * @deprecated Please use the new paginated many mutation (deleteManyAnimalsConnection)
   */
  deleteManyAnimals: BatchPayload;
  /** Delete many Animal documents, return deleted documents */
  deleteManyAnimalsConnection: AnimalConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Breeder documents
   * @deprecated Please use the new paginated many mutation (deleteManyBreedersConnection)
   */
  deleteManyBreeders: BatchPayload;
  /** Delete many Breeder documents, return deleted documents */
  deleteManyBreedersConnection: BreederConnection;
  /**
   * Delete many Dimension documents
   * @deprecated Please use the new paginated many mutation (deleteManyDimensionsConnection)
   */
  deleteManyDimensions: BatchPayload;
  /** Delete many Dimension documents, return deleted documents */
  deleteManyDimensionsConnection: DimensionConnection;
  /**
   * Delete many Enclosure documents
   * @deprecated Please use the new paginated many mutation (deleteManyEnclosuresConnection)
   */
  deleteManyEnclosures: BatchPayload;
  /** Delete many Enclosure documents, return deleted documents */
  deleteManyEnclosuresConnection: EnclosureConnection;
  /**
   * Delete many Equiptment documents
   * @deprecated Please use the new paginated many mutation (deleteManyEquiptmentsConnection)
   */
  deleteManyEquiptments: BatchPayload;
  /** Delete many Equiptment documents, return deleted documents */
  deleteManyEquiptmentsConnection: EquiptmentConnection;
  /**
   * Delete many LogEvent documents
   * @deprecated Please use the new paginated many mutation (deleteManyLogEventsConnection)
   */
  deleteManyLogEvents: BatchPayload;
  /** Delete many LogEvent documents, return deleted documents */
  deleteManyLogEventsConnection: LogEventConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Volume documents
   * @deprecated Please use the new paginated many mutation (deleteManyVolumesConnection)
   */
  deleteManyVolumes: BatchPayload;
  /** Delete many Volume documents, return deleted documents */
  deleteManyVolumesConnection: VolumeConnection;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one volume from _all_ existing stages. Returns deleted document. */
  deleteVolume?: Maybe<Volume>;
  /** Publish one animal */
  publishAnimal?: Maybe<Animal>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one breeder */
  publishBreeder?: Maybe<Breeder>;
  /** Publish one dimension */
  publishDimension?: Maybe<Dimension>;
  /** Publish one enclosure */
  publishEnclosure?: Maybe<Enclosure>;
  /** Publish one equiptment */
  publishEquiptment?: Maybe<Equiptment>;
  /** Publish one logEvent */
  publishLogEvent?: Maybe<LogEvent>;
  /**
   * Publish many Animal documents
   * @deprecated Please use the new paginated many mutation (publishManyAnimalsConnection)
   */
  publishManyAnimals: BatchPayload;
  /** Publish many Animal documents */
  publishManyAnimalsConnection: AnimalConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Breeder documents
   * @deprecated Please use the new paginated many mutation (publishManyBreedersConnection)
   */
  publishManyBreeders: BatchPayload;
  /** Publish many Breeder documents */
  publishManyBreedersConnection: BreederConnection;
  /**
   * Publish many Dimension documents
   * @deprecated Please use the new paginated many mutation (publishManyDimensionsConnection)
   */
  publishManyDimensions: BatchPayload;
  /** Publish many Dimension documents */
  publishManyDimensionsConnection: DimensionConnection;
  /**
   * Publish many Enclosure documents
   * @deprecated Please use the new paginated many mutation (publishManyEnclosuresConnection)
   */
  publishManyEnclosures: BatchPayload;
  /** Publish many Enclosure documents */
  publishManyEnclosuresConnection: EnclosureConnection;
  /**
   * Publish many Equiptment documents
   * @deprecated Please use the new paginated many mutation (publishManyEquiptmentsConnection)
   */
  publishManyEquiptments: BatchPayload;
  /** Publish many Equiptment documents */
  publishManyEquiptmentsConnection: EquiptmentConnection;
  /**
   * Publish many LogEvent documents
   * @deprecated Please use the new paginated many mutation (publishManyLogEventsConnection)
   */
  publishManyLogEvents: BatchPayload;
  /** Publish many LogEvent documents */
  publishManyLogEventsConnection: LogEventConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Volume documents
   * @deprecated Please use the new paginated many mutation (publishManyVolumesConnection)
   */
  publishManyVolumes: BatchPayload;
  /** Publish many Volume documents */
  publishManyVolumesConnection: VolumeConnection;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one volume */
  publishVolume?: Maybe<Volume>;
  /** Schedule to publish one animal */
  schedulePublishAnimal?: Maybe<Animal>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one breeder */
  schedulePublishBreeder?: Maybe<Breeder>;
  /** Schedule to publish one dimension */
  schedulePublishDimension?: Maybe<Dimension>;
  /** Schedule to publish one enclosure */
  schedulePublishEnclosure?: Maybe<Enclosure>;
  /** Schedule to publish one equiptment */
  schedulePublishEquiptment?: Maybe<Equiptment>;
  /** Schedule to publish one logEvent */
  schedulePublishLogEvent?: Maybe<LogEvent>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one volume */
  schedulePublishVolume?: Maybe<Volume>;
  /** Unpublish one animal from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAnimal?: Maybe<Animal>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one breeder from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBreeder?: Maybe<Breeder>;
  /** Unpublish one dimension from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDimension?: Maybe<Dimension>;
  /** Unpublish one enclosure from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEnclosure?: Maybe<Enclosure>;
  /** Unpublish one equiptment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEquiptment?: Maybe<Equiptment>;
  /** Unpublish one logEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLogEvent?: Maybe<LogEvent>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one volume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishVolume?: Maybe<Volume>;
  /** Unpublish one animal from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAnimal?: Maybe<Animal>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one breeder from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBreeder?: Maybe<Breeder>;
  /** Unpublish one dimension from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDimension?: Maybe<Dimension>;
  /** Unpublish one enclosure from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEnclosure?: Maybe<Enclosure>;
  /** Unpublish one equiptment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEquiptment?: Maybe<Equiptment>;
  /** Unpublish one logEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLogEvent?: Maybe<LogEvent>;
  /**
   * Unpublish many Animal documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAnimalsConnection)
   */
  unpublishManyAnimals: BatchPayload;
  /** Find many Animal documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAnimalsConnection: AnimalConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Breeder documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBreedersConnection)
   */
  unpublishManyBreeders: BatchPayload;
  /** Find many Breeder documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBreedersConnection: BreederConnection;
  /**
   * Unpublish many Dimension documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDimensionsConnection)
   */
  unpublishManyDimensions: BatchPayload;
  /** Find many Dimension documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDimensionsConnection: DimensionConnection;
  /**
   * Unpublish many Enclosure documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEnclosuresConnection)
   */
  unpublishManyEnclosures: BatchPayload;
  /** Find many Enclosure documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEnclosuresConnection: EnclosureConnection;
  /**
   * Unpublish many Equiptment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEquiptmentsConnection)
   */
  unpublishManyEquiptments: BatchPayload;
  /** Find many Equiptment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEquiptmentsConnection: EquiptmentConnection;
  /**
   * Unpublish many LogEvent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLogEventsConnection)
   */
  unpublishManyLogEvents: BatchPayload;
  /** Find many LogEvent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLogEventsConnection: LogEventConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Volume documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVolumesConnection)
   */
  unpublishManyVolumes: BatchPayload;
  /** Find many Volume documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVolumesConnection: VolumeConnection;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one volume from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVolume?: Maybe<Volume>;
  /** Update one animal */
  updateAnimal?: Maybe<Animal>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one breeder */
  updateBreeder?: Maybe<Breeder>;
  /** Update one dimension */
  updateDimension?: Maybe<Dimension>;
  /** Update one enclosure */
  updateEnclosure?: Maybe<Enclosure>;
  /** Update one equiptment */
  updateEquiptment?: Maybe<Equiptment>;
  /** Update one logEvent */
  updateLogEvent?: Maybe<LogEvent>;
  /**
   * Update many animals
   * @deprecated Please use the new paginated many mutation (updateManyAnimalsConnection)
   */
  updateManyAnimals: BatchPayload;
  /** Update many Animal documents */
  updateManyAnimalsConnection: AnimalConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many breeders
   * @deprecated Please use the new paginated many mutation (updateManyBreedersConnection)
   */
  updateManyBreeders: BatchPayload;
  /** Update many Breeder documents */
  updateManyBreedersConnection: BreederConnection;
  /**
   * Update many dimensions
   * @deprecated Please use the new paginated many mutation (updateManyDimensionsConnection)
   */
  updateManyDimensions: BatchPayload;
  /** Update many Dimension documents */
  updateManyDimensionsConnection: DimensionConnection;
  /**
   * Update many enclosures
   * @deprecated Please use the new paginated many mutation (updateManyEnclosuresConnection)
   */
  updateManyEnclosures: BatchPayload;
  /** Update many Enclosure documents */
  updateManyEnclosuresConnection: EnclosureConnection;
  /**
   * Update many equiptments
   * @deprecated Please use the new paginated many mutation (updateManyEquiptmentsConnection)
   */
  updateManyEquiptments: BatchPayload;
  /** Update many Equiptment documents */
  updateManyEquiptmentsConnection: EquiptmentConnection;
  /**
   * Update many logEvents
   * @deprecated Please use the new paginated many mutation (updateManyLogEventsConnection)
   */
  updateManyLogEvents: BatchPayload;
  /** Update many LogEvent documents */
  updateManyLogEventsConnection: LogEventConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many volumes
   * @deprecated Please use the new paginated many mutation (updateManyVolumesConnection)
   */
  updateManyVolumes: BatchPayload;
  /** Update many Volume documents */
  updateManyVolumesConnection: VolumeConnection;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one volume */
  updateVolume?: Maybe<Volume>;
  /** Upsert one animal */
  upsertAnimal?: Maybe<Animal>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one breeder */
  upsertBreeder?: Maybe<Breeder>;
  /** Upsert one dimension */
  upsertDimension?: Maybe<Dimension>;
  /** Upsert one enclosure */
  upsertEnclosure?: Maybe<Enclosure>;
  /** Upsert one equiptment */
  upsertEquiptment?: Maybe<Equiptment>;
  /** Upsert one logEvent */
  upsertLogEvent?: Maybe<LogEvent>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one volume */
  upsertVolume?: Maybe<Volume>;
};


export type MutationCreateAnimalArgs = {
  data: AnimalCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBreederArgs = {
  data: BreederCreateInput;
};


export type MutationCreateDimensionArgs = {
  data: DimensionCreateInput;
};


export type MutationCreateEnclosureArgs = {
  data: EnclosureCreateInput;
};


export type MutationCreateEquiptmentArgs = {
  data: EquiptmentCreateInput;
};


export type MutationCreateLogEventArgs = {
  data: LogEventCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateVolumeArgs = {
  data: VolumeCreateInput;
};


export type MutationDeleteAnimalArgs = {
  where: AnimalWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBreederArgs = {
  where: BreederWhereUniqueInput;
};


export type MutationDeleteDimensionArgs = {
  where: DimensionWhereUniqueInput;
};


export type MutationDeleteEnclosureArgs = {
  where: EnclosureWhereUniqueInput;
};


export type MutationDeleteEquiptmentArgs = {
  where: EquiptmentWhereUniqueInput;
};


export type MutationDeleteLogEventArgs = {
  where: LogEventWhereUniqueInput;
};


export type MutationDeleteManyAnimalsArgs = {
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationDeleteManyAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBreedersArgs = {
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationDeleteManyBreedersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationDeleteManyDimensionsArgs = {
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationDeleteManyDimensionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationDeleteManyEnclosuresArgs = {
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationDeleteManyEnclosuresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationDeleteManyEquiptmentsArgs = {
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationDeleteManyEquiptmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationDeleteManyLogEventsArgs = {
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationDeleteManyLogEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyVolumesArgs = {
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationDeleteManyVolumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteVolumeArgs = {
  where: VolumeWhereUniqueInput;
};


export type MutationPublishAnimalArgs = {
  to?: Array<Stage>;
  where: AnimalWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishBreederArgs = {
  to?: Array<Stage>;
  where: BreederWhereUniqueInput;
};


export type MutationPublishDimensionArgs = {
  to?: Array<Stage>;
  where: DimensionWhereUniqueInput;
};


export type MutationPublishEnclosureArgs = {
  to?: Array<Stage>;
  where: EnclosureWhereUniqueInput;
};


export type MutationPublishEquiptmentArgs = {
  to?: Array<Stage>;
  where: EquiptmentWhereUniqueInput;
};


export type MutationPublishLogEventArgs = {
  to?: Array<Stage>;
  where: LogEventWhereUniqueInput;
};


export type MutationPublishManyAnimalsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationPublishManyAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBreedersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationPublishManyBreedersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationPublishManyDimensionsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationPublishManyDimensionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationPublishManyEnclosuresArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationPublishManyEnclosuresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationPublishManyEquiptmentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationPublishManyEquiptmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationPublishManyLogEventsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationPublishManyLogEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyVolumesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationPublishManyVolumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationPublishProductArgs = {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationPublishVolumeArgs = {
  to?: Array<Stage>;
  where: VolumeWhereUniqueInput;
};


export type MutationSchedulePublishAnimalArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AnimalWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBreederArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BreederWhereUniqueInput;
};


export type MutationSchedulePublishDimensionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: DimensionWhereUniqueInput;
};


export type MutationSchedulePublishEnclosureArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EnclosureWhereUniqueInput;
};


export type MutationSchedulePublishEquiptmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EquiptmentWhereUniqueInput;
};


export type MutationSchedulePublishLogEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LogEventWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationSchedulePublishVolumeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: VolumeWhereUniqueInput;
};


export type MutationScheduleUnpublishAnimalArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AnimalWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBreederArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: BreederWhereUniqueInput;
};


export type MutationScheduleUnpublishDimensionArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: DimensionWhereUniqueInput;
};


export type MutationScheduleUnpublishEnclosureArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EnclosureWhereUniqueInput;
};


export type MutationScheduleUnpublishEquiptmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EquiptmentWhereUniqueInput;
};


export type MutationScheduleUnpublishLogEventArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LogEventWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishVolumeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: VolumeWhereUniqueInput;
};


export type MutationUnpublishAnimalArgs = {
  from?: Array<Stage>;
  where: AnimalWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBreederArgs = {
  from?: Array<Stage>;
  where: BreederWhereUniqueInput;
};


export type MutationUnpublishDimensionArgs = {
  from?: Array<Stage>;
  where: DimensionWhereUniqueInput;
};


export type MutationUnpublishEnclosureArgs = {
  from?: Array<Stage>;
  where: EnclosureWhereUniqueInput;
};


export type MutationUnpublishEquiptmentArgs = {
  from?: Array<Stage>;
  where: EquiptmentWhereUniqueInput;
};


export type MutationUnpublishLogEventArgs = {
  from?: Array<Stage>;
  where: LogEventWhereUniqueInput;
};


export type MutationUnpublishManyAnimalsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationUnpublishManyAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBreedersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationUnpublishManyBreedersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationUnpublishManyDimensionsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationUnpublishManyDimensionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationUnpublishManyEnclosuresArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationUnpublishManyEnclosuresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationUnpublishManyEquiptmentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationUnpublishManyEquiptmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationUnpublishManyLogEventsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationUnpublishManyLogEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyVolumesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationUnpublishManyVolumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishVolumeArgs = {
  from?: Array<Stage>;
  where: VolumeWhereUniqueInput;
};


export type MutationUpdateAnimalArgs = {
  data: AnimalUpdateInput;
  where: AnimalWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBreederArgs = {
  data: BreederUpdateInput;
  where: BreederWhereUniqueInput;
};


export type MutationUpdateDimensionArgs = {
  data: DimensionUpdateInput;
  where: DimensionWhereUniqueInput;
};


export type MutationUpdateEnclosureArgs = {
  data: EnclosureUpdateInput;
  where: EnclosureWhereUniqueInput;
};


export type MutationUpdateEquiptmentArgs = {
  data: EquiptmentUpdateInput;
  where: EquiptmentWhereUniqueInput;
};


export type MutationUpdateLogEventArgs = {
  data: LogEventUpdateInput;
  where: LogEventWhereUniqueInput;
};


export type MutationUpdateManyAnimalsArgs = {
  data: AnimalUpdateManyInput;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationUpdateManyAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AnimalUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnimalManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBreedersArgs = {
  data: BreederUpdateManyInput;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationUpdateManyBreedersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BreederUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BreederManyWhereInput>;
};


export type MutationUpdateManyDimensionsArgs = {
  data: DimensionUpdateManyInput;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationUpdateManyDimensionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: DimensionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DimensionManyWhereInput>;
};


export type MutationUpdateManyEnclosuresArgs = {
  data: EnclosureUpdateManyInput;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationUpdateManyEnclosuresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EnclosureUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EnclosureManyWhereInput>;
};


export type MutationUpdateManyEquiptmentsArgs = {
  data: EquiptmentUpdateManyInput;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationUpdateManyEquiptmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EquiptmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EquiptmentManyWhereInput>;
};


export type MutationUpdateManyLogEventsArgs = {
  data: LogEventUpdateManyInput;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationUpdateManyLogEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LogEventUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogEventManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyVolumesArgs = {
  data: VolumeUpdateManyInput;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationUpdateManyVolumesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: VolumeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VolumeManyWhereInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateVolumeArgs = {
  data: VolumeUpdateInput;
  where: VolumeWhereUniqueInput;
};


export type MutationUpsertAnimalArgs = {
  upsert: AnimalUpsertInput;
  where: AnimalWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBreederArgs = {
  upsert: BreederUpsertInput;
  where: BreederWhereUniqueInput;
};


export type MutationUpsertDimensionArgs = {
  upsert: DimensionUpsertInput;
  where: DimensionWhereUniqueInput;
};


export type MutationUpsertEnclosureArgs = {
  upsert: EnclosureUpsertInput;
  where: EnclosureWhereUniqueInput;
};


export type MutationUpsertEquiptmentArgs = {
  upsert: EquiptmentUpsertInput;
  where: EquiptmentWhereUniqueInput;
};


export type MutationUpsertLogEventArgs = {
  upsert: LogEventUpsertInput;
  where: LogEventWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertVolumeArgs = {
  upsert: VolumeUpsertInput;
  where: VolumeWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  asin?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  featureBullets: Array<Scalars['String']>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  keywords: Array<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  purchase?: Maybe<Scalars['Date']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  variantTitle?: Maybe<Scalars['String']>;
};


export type ProductCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  asin?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  featureBullets?: InputMaybe<Array<Scalars['String']>>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variantTitle?: InputMaybe<Scalars['String']>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  asin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  asin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  asin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  asin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  asin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  asin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  asin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  asin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  asin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  asin_starts_with?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dimensions_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dimensions_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dimensions_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dimensions_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dimensions_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dimensions_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dimensions_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dimensions_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dimensions_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  featureBullets?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  featureBullets_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  featureBullets_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  featureBullets_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  featureBullets_not?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  purchase?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  purchase_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  purchase_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  purchase_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  purchase_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  purchase_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  purchase_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  purchase_not_in?: InputMaybe<Array<Scalars['Date']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variantTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  variantTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  variantTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  variantTitle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  variantTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  variantTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  variantTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  variantTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  variantTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  variantTitle_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProductOrderByInput {
  AsinAsc = 'asin_ASC',
  AsinDesc = 'asin_DESC',
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DimensionsAsc = 'dimensions_ASC',
  DimensionsDesc = 'dimensions_DESC',
  FeatureBulletsAsc = 'featureBullets_ASC',
  FeatureBulletsDesc = 'featureBullets_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PurchaseAsc = 'purchase_ASC',
  PurchaseDesc = 'purchase_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VariantTitleAsc = 'variantTitle_ASC',
  VariantTitleDesc = 'variantTitle_DESC'
}

export type ProductUpdateInput = {
  asin?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  featureBullets?: InputMaybe<Array<Scalars['String']>>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  variantTitle?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  asin?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  featureBullets?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  variantTitle?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  asin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  asin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  asin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  asin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  asin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  asin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  asin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  asin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  asin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  asin_starts_with?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dimensions_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dimensions_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dimensions_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dimensions_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dimensions_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dimensions_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dimensions_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dimensions_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dimensions_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  featureBullets?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  featureBullets_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  featureBullets_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  featureBullets_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  featureBullets_not?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  purchase?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  purchase_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  purchase_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  purchase_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  purchase_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  purchase_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  purchase_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  purchase_not_in?: InputMaybe<Array<Scalars['Date']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variantTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  variantTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  variantTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  variantTitle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  variantTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  variantTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  variantTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  variantTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  variantTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  variantTitle_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single animal */
  animal?: Maybe<Animal>;
  /** Retrieve document version */
  animalVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple animals */
  animals: Array<Animal>;
  /** Retrieve multiple animals using the Relay connection interface */
  animalsConnection: AnimalConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single breeder */
  breeder?: Maybe<Breeder>;
  /** Retrieve document version */
  breederVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple breeders */
  breeders: Array<Breeder>;
  /** Retrieve multiple breeders using the Relay connection interface */
  breedersConnection: BreederConnection;
  /** Retrieve a single dimension */
  dimension?: Maybe<Dimension>;
  /** Retrieve document version */
  dimensionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple dimensions */
  dimensions: Array<Dimension>;
  /** Retrieve multiple dimensions using the Relay connection interface */
  dimensionsConnection: DimensionConnection;
  /** Retrieve a single enclosure */
  enclosure?: Maybe<Enclosure>;
  /** Retrieve document version */
  enclosureVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple enclosures */
  enclosures: Array<Enclosure>;
  /** Retrieve multiple enclosures using the Relay connection interface */
  enclosuresConnection: EnclosureConnection;
  /** Retrieve a single equiptment */
  equiptment?: Maybe<Equiptment>;
  /** Retrieve document version */
  equiptmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple equiptments */
  equiptments: Array<Equiptment>;
  /** Retrieve multiple equiptments using the Relay connection interface */
  equiptmentsConnection: EquiptmentConnection;
  /** Retrieve a single logEvent */
  logEvent?: Maybe<LogEvent>;
  /** Retrieve document version */
  logEventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple logEvents */
  logEvents: Array<LogEvent>;
  /** Retrieve multiple logEvents using the Relay connection interface */
  logEventsConnection: LogEventConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single volume */
  volume?: Maybe<Volume>;
  /** Retrieve document version */
  volumeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple volumes */
  volumes: Array<Volume>;
  /** Retrieve multiple volumes using the Relay connection interface */
  volumesConnection: VolumeConnection;
};


export type QueryAnimalArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AnimalWhereUniqueInput;
};


export type QueryAnimalVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAnimalsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AnimalOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AnimalWhereInput>;
};


export type QueryAnimalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AnimalOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AnimalWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBreederArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BreederWhereUniqueInput;
};


export type QueryBreederVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBreedersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BreederOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BreederWhereInput>;
};


export type QueryBreedersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BreederOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BreederWhereInput>;
};


export type QueryDimensionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DimensionWhereUniqueInput;
};


export type QueryDimensionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDimensionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DimensionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DimensionWhereInput>;
};


export type QueryDimensionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DimensionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<DimensionWhereInput>;
};


export type QueryEnclosureArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EnclosureWhereUniqueInput;
};


export type QueryEnclosureVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEnclosuresArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EnclosureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EnclosureWhereInput>;
};


export type QueryEnclosuresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EnclosureOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EnclosureWhereInput>;
};


export type QueryEquiptmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EquiptmentWhereUniqueInput;
};


export type QueryEquiptmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEquiptmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EquiptmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EquiptmentWhereInput>;
};


export type QueryEquiptmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EquiptmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EquiptmentWhereInput>;
};


export type QueryLogEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LogEventWhereUniqueInput;
};


export type QueryLogEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLogEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LogEventWhereInput>;
};


export type QueryLogEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LogEventWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVolumeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: VolumeWhereUniqueInput;
};


export type QueryVolumeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryVolumesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VolumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<VolumeWhereInput>;
};


export type QueryVolumesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VolumeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<VolumeWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Animal | Asset | Breeder | Dimension | Enclosure | Equiptment | LogEvent | Product | Volume;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** list of sexes for pet??idk?? */
export enum Sex {
  Female = 'female',
  Male = 'male',
  Undetermined = 'undetermined'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Volume = Node & {
  __typename?: 'Volume';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Volume>;
  enclosure?: Maybe<Enclosure>;
  /** List of Volume versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  volume?: Maybe<Scalars['Int']>;
};


export type VolumeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type VolumeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type VolumeEnclosureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type VolumeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type VolumePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type VolumeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type VolumeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type VolumeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VolumeWhereUniqueInput;
};

/** A connection to a list of items. */
export type VolumeConnection = {
  __typename?: 'VolumeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VolumeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VolumeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  enclosure?: InputMaybe<EnclosureCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  volume?: InputMaybe<Scalars['Int']>;
};

export type VolumeCreateManyInlineInput = {
  /** Connect multiple existing Volume documents */
  connect?: InputMaybe<Array<VolumeWhereUniqueInput>>;
  /** Create and connect multiple existing Volume documents */
  create?: InputMaybe<Array<VolumeCreateInput>>;
};

export type VolumeCreateOneInlineInput = {
  /** Connect one existing Volume document */
  connect?: InputMaybe<VolumeWhereUniqueInput>;
  /** Create and connect one Volume document */
  create?: InputMaybe<VolumeCreateInput>;
};

/** An edge in a connection. */
export type VolumeEdge = {
  __typename?: 'VolumeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Volume;
};

/** Identifies documents */
export type VolumeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VolumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VolumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VolumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enclosure?: InputMaybe<EnclosureWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  volume?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  volume_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  volume_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  volume_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  volume_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  volume_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  volume_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  volume_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum VolumeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC'
}

export type VolumeUpdateInput = {
  enclosure?: InputMaybe<EnclosureUpdateOneInlineInput>;
  volume?: InputMaybe<Scalars['Int']>;
};

export type VolumeUpdateManyInlineInput = {
  /** Connect multiple existing Volume documents */
  connect?: InputMaybe<Array<VolumeConnectInput>>;
  /** Create and connect multiple Volume documents */
  create?: InputMaybe<Array<VolumeCreateInput>>;
  /** Delete multiple Volume documents */
  delete?: InputMaybe<Array<VolumeWhereUniqueInput>>;
  /** Disconnect multiple Volume documents */
  disconnect?: InputMaybe<Array<VolumeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Volume documents */
  set?: InputMaybe<Array<VolumeWhereUniqueInput>>;
  /** Update multiple Volume documents */
  update?: InputMaybe<Array<VolumeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Volume documents */
  upsert?: InputMaybe<Array<VolumeUpsertWithNestedWhereUniqueInput>>;
};

export type VolumeUpdateManyInput = {
  volume?: InputMaybe<Scalars['Int']>;
};

export type VolumeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VolumeUpdateManyInput;
  /** Document search */
  where: VolumeWhereInput;
};

export type VolumeUpdateOneInlineInput = {
  /** Connect existing Volume document */
  connect?: InputMaybe<VolumeWhereUniqueInput>;
  /** Create and connect one Volume document */
  create?: InputMaybe<VolumeCreateInput>;
  /** Delete currently connected Volume document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Volume document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Volume document */
  update?: InputMaybe<VolumeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Volume document */
  upsert?: InputMaybe<VolumeUpsertWithNestedWhereUniqueInput>;
};

export type VolumeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VolumeUpdateInput;
  /** Unique document search */
  where: VolumeWhereUniqueInput;
};

export type VolumeUpsertInput = {
  /** Create document if it didn't exist */
  create: VolumeCreateInput;
  /** Update document if it exists */
  update: VolumeUpdateInput;
};

export type VolumeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VolumeUpsertInput;
  /** Unique document search */
  where: VolumeWhereUniqueInput;
};

/** Identifies documents */
export type VolumeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VolumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VolumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VolumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enclosure?: InputMaybe<EnclosureWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  volume?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  volume_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  volume_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  volume_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  volume_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  volume_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  volume_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  volume_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References Volume record uniquely */
export type VolumeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GProductQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GProductQueryQuery = { __typename?: 'Query', productsConnection: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', asin?: string | null, brand?: string | null, createdAt: any, description?: string | null, dimensions?: string | null, featureBullets: Array<string>, id: string, link?: string | null, purchase?: any | null, variantTitle?: string | null } }> } };

export type GAnimalQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GAnimalQueryQuery = { __typename?: 'Query', animals: Array<{ __typename?: 'Animal', born?: any | null, name?: string | null, sex: Sex, breeder?: { __typename?: 'Breeder', description?: string | null, email?: string | null, id: string, name?: string | null, publishedAt?: any | null } | null, photo?: { __typename?: 'Asset', createdAt: any, fileName: string, handle: string, height?: number | null, id: string, mimeType?: string | null, size?: number | null, updatedAt: any } | null }> };


declare module '*/query.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GProductQuery: DocumentNode;
export const GAnimalQuery: DocumentNode;

  export default defaultDocument;
}
    

export const GProductQuery = gql`
    query GProductQuery {
  productsConnection {
    edges {
      node {
        asin
        brand
        createdAt
        description
        dimensions
        featureBullets
        id
        link
        purchase
        variantTitle
      }
    }
  }
}
    `;
export const GAnimalQuery = gql`
    query GAnimalQuery {
  animals {
    born
    name
    breeder {
      description
      email
      id
      name
      publishedAt
    }
    sex
    photo {
      createdAt
      fileName
      handle
      height
      id
      mimeType
      size
      updatedAt
    }
  }
}
    `;