const mock = require('./mock')

const show = {
  method: 'GET',
  path: '/shoes/list',
  handler: (req, reply) => reply(mock.shoes)
}

const save = {
  method: 'GET',
  path: '/shoes/create',
  handler: (req, reply) => reply(mock.save)
}

module.exports = {
  show,
  save
}
