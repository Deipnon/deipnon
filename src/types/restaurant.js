// @flow

export type RestaurantType = {|
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
|}