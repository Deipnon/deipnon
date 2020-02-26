// @flow
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
export const createWorkHour = /* GraphQL */ `
  mutation CreateWorkHour(
    $input: CreateWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    createWorkHour(input: $input, condition: $condition) {
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
export const updateWorkHour = /* GraphQL */ `
  mutation UpdateWorkHour(
    $input: UpdateWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    updateWorkHour(input: $input, condition: $condition) {
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
export const deleteWorkHour = /* GraphQL */ `
  mutation DeleteWorkHour(
    $input: DeleteWorkHourInput!
    $condition: ModelWorkHourConditionInput
  ) {
    deleteWorkHour(input: $input, condition: $condition) {
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
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
