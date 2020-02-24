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
