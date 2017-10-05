const map = require('lodash/map')
const routes = require('./routes')
const Hapi = require('hapi')
const Joi = require('joi')

const latency = 250
const server = new Hapi.Server()

function reduceDetails(acc, detail) {
  return Object.assign(acc, { [detail.path]: [detail.type] })
}

function failAction(request, reply, source, error) {
  reply({
    fields: error.data.details.reduce(reduceDetails, {})
  })
  .code(400)
}

server.connection({
  host: '0.0.0.0',
  port: 3000,
  routes: {
    validate: {
      failAction,
      headers: Joi.object({
        'accept-language': Joi.string().required()
      })
      .options({ allowUnknown: true })
    },
    cors: {
      origin: ['*'],
      headers: [
        'content-type',
        'accept-language'
      ],
      additionalHeaders: ['accept', 'authorization', 'content-type']
    }
  }
})

server.ext('onPreResponse', (response, reply) => {
  return new Promise(resolve => setTimeout(() => resolve(reply.continue()), latency))
})

map(routes, routeModule => map(routeModule, route => server.route(route)))

server.start((err) => {
  if (err) {
    throw err
  }
})
