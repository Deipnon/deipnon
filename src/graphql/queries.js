// @flow
// this is an auto generated file. This will be overwritten

export const getGeolocation = /* GraphQL */ `
  query GetGeolocation($request: GeolocationRequest) {
    getGeolocation(request: $request) {
      lat
      lng
    }
  }
`;
export const searchImage = /* GraphQL */ `
  query SearchImage($request: ImageSearchRequest) {
    searchImage(request: $request) {
      description
      raw
      full
      regular
      small
      thumb
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      phone
      email
      hasEatInOption
      hasPickupOption
      hasDeliveryOption
      zipCode
      addressLine
      city
      state
      lat
      lng
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        hasEatInOption
        hasPickupOption
        hasDeliveryOption
        zipCode
        addressLine
        city
        state
        lat
        lng
      }
      nextToken
    }
  }
`;
export const getWorkHour = /* GraphQL */ `
  query GetWorkHour($id: ID!) {
    getWorkHour(id: $id) {
      id
      restaurantId
      type
      dayOfWeek
      day
      startAt
      endAt
    }
  }
`;
export const listWorkHours = /* GraphQL */ `
  query ListWorkHours(
    $filter: ModelWorkHourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restaurantId
        type
        dayOfWeek
        day
        startAt
        endAt
      }
      nextToken
    }
  }
`;
export const getProductCategory = /* GraphQL */ `
  query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
      id
      restaurantId
      name
      description
      image {
        description
        raw
        full
        regular
        small
        thumb
      }
      isActive
      sortOrder
    }
  }
`;
export const listProductCategorys = /* GraphQL */ `
  query ListProductCategorys(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        restaurantId
        name
        description
        image {
          description
          raw
          full
          regular
          small
          thumb
        }
        isActive
        sortOrder
      }
      nextToken
    }
  }
`;
