/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestaurantInput = {|
  id?: ?string,
  name: string,
  phone?: ?any,
  email?: ?any,
  hasEatInOption?: ?boolean,
  hasPickupOption?: ?boolean,
  hasDeliveryOption?: ?boolean,
  zipCode?: ?string,
  addressLine?: ?string,
  city?: ?string,
  state?: ?string,
  lat?: ?number,
  lng?: ?number,
|};

export type ModelRestaurantConditionInput = {|
  name?: ?ModelStringInput,
  phone?: ?ModelStringInput,
  email?: ?ModelStringInput,
  hasEatInOption?: ?ModelBooleanInput,
  hasPickupOption?: ?ModelBooleanInput,
  hasDeliveryOption?: ?ModelBooleanInput,
  zipCode?: ?ModelStringInput,
  addressLine?: ?ModelStringInput,
  city?: ?ModelStringInput,
  state?: ?ModelStringInput,
  lat?: ?ModelFloatInput,
  lng?: ?ModelFloatInput,
  and?: ?Array< ?ModelRestaurantConditionInput >,
  or?: ?Array< ?ModelRestaurantConditionInput >,
  not?: ?ModelRestaurantConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelBooleanInput = {|
  ne?: ?boolean,
  eq?: ?boolean,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type ModelFloatInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type UpdateRestaurantInput = {|
  id: string,
  name?: ?string,
  phone?: ?any,
  email?: ?any,
  hasEatInOption?: ?boolean,
  hasPickupOption?: ?boolean,
  hasDeliveryOption?: ?boolean,
  zipCode?: ?string,
  addressLine?: ?string,
  city?: ?string,
  state?: ?string,
  lat?: ?number,
  lng?: ?number,
|};

export type DeleteRestaurantInput = {|
  id?: ?string,
|};

export type CreateWorkHourInput = {|
  id?: ?string,
  restaurantId: string,
  type: string,
  dayOfWeek: number,
  day: string,
  startAt: any,
  endAt: any,
|};

export type ModelWorkHourConditionInput = {|
  restaurantId?: ?ModelIDInput,
  type?: ?ModelStringInput,
  dayOfWeek?: ?ModelIntInput,
  day?: ?ModelStringInput,
  startAt?: ?ModelStringInput,
  endAt?: ?ModelStringInput,
  and?: ?Array< ?ModelWorkHourConditionInput >,
  or?: ?Array< ?ModelWorkHourConditionInput >,
  not?: ?ModelWorkHourConditionInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelIntInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type UpdateWorkHourInput = {|
  id: string,
  restaurantId?: ?string,
  type?: ?string,
  dayOfWeek?: ?number,
  day?: ?string,
  startAt?: ?any,
  endAt?: ?any,
|};

export type DeleteWorkHourInput = {|
  id?: ?string,
|};

export type CreateProductCategoryInput = {|
  id?: ?string,
  restaurantId: string,
  name: string,
  description?: ?string,
  image?: ?ImageSearchInput,
  isActive: boolean,
  sortOrder: number,
|};

export type ImageSearchInput = {|
  description?: ?string,
  raw?: ?string,
  full?: ?string,
  regular?: ?string,
  small?: ?string,
  thumb?: ?string,
|};

export type ModelProductCategoryConditionInput = {|
  restaurantId?: ?ModelIDInput,
  name?: ?ModelStringInput,
  description?: ?ModelStringInput,
  isActive?: ?ModelBooleanInput,
  sortOrder?: ?ModelIntInput,
  and?: ?Array< ?ModelProductCategoryConditionInput >,
  or?: ?Array< ?ModelProductCategoryConditionInput >,
  not?: ?ModelProductCategoryConditionInput,
|};

export type UpdateProductCategoryInput = {|
  id: string,
  restaurantId?: ?string,
  name?: ?string,
  description?: ?string,
  image?: ?ImageSearchInput,
  isActive?: ?boolean,
  sortOrder?: ?number,
|};

export type DeleteProductCategoryInput = {|
  id?: ?string,
|};

export type GeolocationRequest = {|
  addressLine: string,
  zipCode: string,
  city: string,
  state: string,
|};

export type ImageSearchRequest = {|
  searchKey: string,
|};

export type ModelRestaurantFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  phone?: ?ModelStringInput,
  email?: ?ModelStringInput,
  hasEatInOption?: ?ModelBooleanInput,
  hasPickupOption?: ?ModelBooleanInput,
  hasDeliveryOption?: ?ModelBooleanInput,
  zipCode?: ?ModelStringInput,
  addressLine?: ?ModelStringInput,
  city?: ?ModelStringInput,
  state?: ?ModelStringInput,
  lat?: ?ModelFloatInput,
  lng?: ?ModelFloatInput,
  and?: ?Array< ?ModelRestaurantFilterInput >,
  or?: ?Array< ?ModelRestaurantFilterInput >,
  not?: ?ModelRestaurantFilterInput,
|};

export type ModelWorkHourFilterInput = {|
  id?: ?ModelIDInput,
  restaurantId?: ?ModelIDInput,
  type?: ?ModelStringInput,
  dayOfWeek?: ?ModelIntInput,
  day?: ?ModelStringInput,
  startAt?: ?ModelStringInput,
  endAt?: ?ModelStringInput,
  and?: ?Array< ?ModelWorkHourFilterInput >,
  or?: ?Array< ?ModelWorkHourFilterInput >,
  not?: ?ModelWorkHourFilterInput,
|};

export type ModelProductCategoryFilterInput = {|
  id?: ?ModelIDInput,
  restaurantId?: ?ModelIDInput,
  name?: ?ModelStringInput,
  description?: ?ModelStringInput,
  isActive?: ?ModelBooleanInput,
  sortOrder?: ?ModelIntInput,
  and?: ?Array< ?ModelProductCategoryFilterInput >,
  or?: ?Array< ?ModelProductCategoryFilterInput >,
  not?: ?ModelProductCategoryFilterInput,
|};

export type CreateRestaurantMutationVariables = {|
  input: CreateRestaurantInput,
  condition?: ?ModelRestaurantConditionInput,
|};

export type CreateRestaurantMutation = {|
  createRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type UpdateRestaurantMutationVariables = {|
  input: UpdateRestaurantInput,
  condition?: ?ModelRestaurantConditionInput,
|};

export type UpdateRestaurantMutation = {|
  updateRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type DeleteRestaurantMutationVariables = {|
  input: DeleteRestaurantInput,
  condition?: ?ModelRestaurantConditionInput,
|};

export type DeleteRestaurantMutation = {|
  deleteRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type CreateWorkHourMutationVariables = {|
  input: CreateWorkHourInput,
  condition?: ?ModelWorkHourConditionInput,
|};

export type CreateWorkHourMutation = {|
  createWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type UpdateWorkHourMutationVariables = {|
  input: UpdateWorkHourInput,
  condition?: ?ModelWorkHourConditionInput,
|};

export type UpdateWorkHourMutation = {|
  updateWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type DeleteWorkHourMutationVariables = {|
  input: DeleteWorkHourInput,
  condition?: ?ModelWorkHourConditionInput,
|};

export type DeleteWorkHourMutation = {|
  deleteWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type CreateProductCategoryMutationVariables = {|
  input: CreateProductCategoryInput,
  condition?: ?ModelProductCategoryConditionInput,
|};

export type CreateProductCategoryMutation = {|
  createProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type UpdateProductCategoryMutationVariables = {|
  input: UpdateProductCategoryInput,
  condition?: ?ModelProductCategoryConditionInput,
|};

export type UpdateProductCategoryMutation = {|
  updateProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type DeleteProductCategoryMutationVariables = {|
  input: DeleteProductCategoryInput,
  condition?: ?ModelProductCategoryConditionInput,
|};

export type DeleteProductCategoryMutation = {|
  deleteProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type GetGeolocationQueryVariables = {|
  request?: ?GeolocationRequest,
|};

export type GetGeolocationQuery = {|
  getGeolocation: ? {|
    __typename: "Geolocation",
    lat: ?number,
    lng: ?number,
  |},
|};

export type SearchImageQueryVariables = {|
  request?: ?ImageSearchRequest,
|};

export type SearchImageQuery = {|
  searchImage: ? Array<? {|
    __typename: "ImageSearch",
    description: ?string,
    raw: ?string,
    full: ?string,
    regular: ?string,
    small: ?string,
    thumb: ?string,
  |} >,
|};

export type GetRestaurantQueryVariables = {|
  id: string,
|};

export type GetRestaurantQuery = {|
  getRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type ListRestaurantsQueryVariables = {|
  filter?: ?ModelRestaurantFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListRestaurantsQuery = {|
  listRestaurants: ? {|
    __typename: "ModelRestaurantConnection",
    items: ? Array<? {|
      __typename: "Restaurant",
      id: string,
      name: string,
      phone: ?any,
      email: ?any,
      hasEatInOption: ?boolean,
      hasPickupOption: ?boolean,
      hasDeliveryOption: ?boolean,
      zipCode: ?string,
      addressLine: ?string,
      city: ?string,
      state: ?string,
      lat: ?number,
      lng: ?number,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetWorkHourQueryVariables = {|
  id: string,
|};

export type GetWorkHourQuery = {|
  getWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type ListWorkHoursQueryVariables = {|
  filter?: ?ModelWorkHourFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListWorkHoursQuery = {|
  listWorkHours: ? {|
    __typename: "ModelWorkHourConnection",
    items: ? Array<? {|
      __typename: "WorkHour",
      id: string,
      restaurantId: string,
      type: string,
      dayOfWeek: number,
      day: string,
      startAt: any,
      endAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetProductCategoryQueryVariables = {|
  id: string,
|};

export type GetProductCategoryQuery = {|
  getProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type ListProductCategorysQueryVariables = {|
  filter?: ?ModelProductCategoryFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListProductCategorysQuery = {|
  listProductCategorys: ? {|
    __typename: "ModelProductCategoryConnection",
    items: ? Array<? {|
      __typename: "ProductCategory",
      id: string,
      restaurantId: string,
      name: string,
      description: ?string,
      image: ? {|
        __typename: "ImageSearch",
        description: ?string,
        raw: ?string,
        full: ?string,
        regular: ?string,
        small: ?string,
        thumb: ?string,
      |},
      isActive: boolean,
      sortOrder: number,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateRestaurantSubscription = {|
  onCreateRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type OnUpdateRestaurantSubscription = {|
  onUpdateRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type OnDeleteRestaurantSubscription = {|
  onDeleteRestaurant: ? {|
    __typename: "Restaurant",
    id: string,
    name: string,
    phone: ?any,
    email: ?any,
    hasEatInOption: ?boolean,
    hasPickupOption: ?boolean,
    hasDeliveryOption: ?boolean,
    zipCode: ?string,
    addressLine: ?string,
    city: ?string,
    state: ?string,
    lat: ?number,
    lng: ?number,
  |},
|};

export type OnCreateWorkHourSubscription = {|
  onCreateWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type OnUpdateWorkHourSubscription = {|
  onUpdateWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type OnDeleteWorkHourSubscription = {|
  onDeleteWorkHour: ? {|
    __typename: "WorkHour",
    id: string,
    restaurantId: string,
    type: string,
    dayOfWeek: number,
    day: string,
    startAt: any,
    endAt: any,
  |},
|};

export type OnCreateProductCategorySubscription = {|
  onCreateProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type OnUpdateProductCategorySubscription = {|
  onUpdateProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};

export type OnDeleteProductCategorySubscription = {|
  onDeleteProductCategory: ? {|
    __typename: "ProductCategory",
    id: string,
    restaurantId: string,
    name: string,
    description: ?string,
    image: ? {|
      __typename: "ImageSearch",
      description: ?string,
      raw: ?string,
      full: ?string,
      regular: ?string,
      small: ?string,
      thumb: ?string,
    |},
    isActive: boolean,
    sortOrder: number,
  |},
|};