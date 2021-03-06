const listingsData = [
  {
    address: '18 Greylock Road',
    city: 'Brookline',
    state: 'MA',
    propertyType: 'Bando',
    bedrooms: 3,
    bathrooms: 1,
    price: 8000000,
    floorSpace: 10000,
    // extras: [
    //   'elevator',
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: true,
      swimming_pool: true,
      finished_basement: true
    },
    image: 'https://images.adsttc.com/media/images/53d8/5c86/c07a/8059/5e00/0267/large_jpg/PORTADA.jpg?1406688379'
  },
  {
    address: '658 Washington Street',
    city: 'Brookline',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 8,
    bathrooms: 8,
    price: 4500000,
    floorSpace: 8000,
    // extras: [
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: false,
      swimming_pool: false,
      finished_basement: true
    },
    image: 'https://patch.com/img/cdn20/users/22926785/20190715/051807/styles/patch_image/public/processed_images/97f367dd52513a01fe128cfcafe01ba2l-m0o.jpg'
  },
  {
    address: '7 Westbourne Street',
    city: 'Roslindale',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 6,
    bathrooms: 8,
    price: 3250000,
    floorSpace: 6000,
    // extras: [
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: false,
      swimming_pool: true,
      finished_basement: true
    },
    image: 'https://i.pinimg.com/originals/c2/54/1c/c2541c4354d17b791411753af1a8b959.jpg'
  },
  {
    address: '496 North Pleasant Street',
    city: 'Amherst',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 2,
    bathrooms: 3,
    price: 875000,
    floorSpace: 3000,
    // extras: [
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: false,
      swimming_pool: true,
      finished_basement: true
    },
    image: 'https://i.pinimg.com/originals/f8/e9/bd/f8e9bd96b564f63e47730ac0f249fa8c.jpg'
  },
  {
    address: '51 Mason Terrace',
    city: 'Brookline',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 1,
    bathrooms: 4,
    price: 6450000,
    floorSpace: 9000,
    // extras: [
    //   'elevator',
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: true,
      swimming_pool: true,
      finished_basement: true
    },
    image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkarenhua%2Ffiles%2F2017%2F02%2Fbrady-la2.jpg'
  },
  {
    address: 'SNC Way',
    city: 'Dorchester',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 9,
    bathrooms: 9,
    price: 545000,
    floorSpace: 2000,
    // extras: [
    //   'elevator',
    //   'swimming pool',
    //   'finished basement'
    // ],
    extras: {
      elevator: true,
      swimming_pool: true,
      finished_basement: true
    },
    image: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/64983743/Giselle_House_1.0.jpg'
  },
  {
    address: '18 Warren Street',
    city: 'Brookline',
    state: 'MA',
    propertyType: 'Mansion',
    bedrooms: 7,
    bathrooms: 2,
    price: 1000000,
    floorSpace: 12000,
    // extras: [
    //   'swimming pool'
    // ],
    extras: {
      elevator: false,
      swimming_pool: true,
      finished_basement: false
    },
    image: 'https://i.pinimg.com/originals/66/2d/5a/662d5a7247e528b2e7b12788bc5a9cf7.jpg'
  }
]

export default listingsData
