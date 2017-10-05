const shoes = {
  data: [{
    name: 'nike',
    id: 15454,
    store: 'nethoes'
  }, {
    name: 'adidas',
    id: 545,
    store: 'nethoes'
  }]
}

const save = {
  data: {
    name: 'nike',
    id: 15454,
    store: 'nethoes'
  },
  status: 204,
  message: 'shoe created successfully'
}

module.exports = {
  shoes,
  save
}
