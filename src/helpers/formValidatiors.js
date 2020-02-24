export default {
  name: {
    rules: [
      { required: true, message: 'Please input restaurant name' }
    ]
  },
  addressLine: {
    rules: [
      {
        required: true,
        message: 'Please write your address!',
      },
    ],
  },
  zipCode: {
    rules: [
      {
        required: true,
        message: 'Zip code is required!',
      },
    ],
  },
  city: {
    rules: [
      {
        required: true,
        message: 'City is required!',
      },
    ],
  },
  state: {
    rules: [
      {
        required: true,
        message: 'State is required!',
      },
    ],
  }
}