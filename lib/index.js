'use strict'

const deprecate = require('depd')('loopback-ds-resultset-limit-mixin')
const resultsetLimit = require('./resultset-limit')

module.exports = function mixin(app) {
  app.loopback.modelBuilder.mixins.define = deprecate.function(app.loopback.modelBuilder.mixins.define,
    'app.modelBuilder.mixins.define: Use mixinSources instead')
  app.loopback.modelBuilder.mixins.define('ResultsetLimit', resultsetLimit)
}
