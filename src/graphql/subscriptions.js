// @flow
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateWorkHour = /* GraphQL */ `
  subscription OnCreateWorkHour {
    onCreateWorkHour {
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
export const onUpdateWorkHour = /* GraphQL */ `
  subscription OnUpdateWorkHour {
    onUpdateWorkHour {
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
export const onDeleteWorkHour = /* GraphQL */ `
  subscription OnDeleteWorkHour {
    onDeleteWorkHour {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory {
    onCreateProductCategory {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory {
    onUpdateProductCategory {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory {
    onDeleteProductCategory {
      id
      restaurantId
      name
      description
      imageUrl
      isActive
    }
  }
`;
