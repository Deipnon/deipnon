export const formValidators = {
  name: [
    { required: true, message: 'Please input restaurant name' }
  ],
  addressLine: [
    {
      required: true,
      message: 'Please write your address!',
    },
  ],
  zipCode: [
    {
      required: true,
      message: 'Zip code is required!',
    },
  ],
  city: [
    {
      required: true,
      message: 'City is required!',
    },
  ],
  state: [
    {
      required: true,
      message: 'State is required!',
    },
  ]
}

export const toFormData = (data) => {
  if(!data) return []

  return Object.keys(data).map(key => {
    return {
      name: [key],
      value: data[key]
    }
  })
}