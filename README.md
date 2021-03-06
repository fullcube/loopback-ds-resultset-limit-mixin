RESULTSET LIMIT
=============

[![Greenkeeper badge](https://badges.greenkeeper.io/fullcube/loopback-ds-resultset-limit-mixin.svg)](https://greenkeeper.io/)

[![Circle CI](https://circleci.com/gh/fullcube/loopback-ds-resultset-limit-mixin.svg?style=svg)](https://circleci.com/gh/fullcube/loopback-ds-resultset-limit-mixin) [![Coverage Status](https://coveralls.io/repos/fullcube/loopback-ds-resultset-limit-mixin/badge.svg?branch=forEachAsync&service=github)](https://coveralls.io/github/fullcube/loopback-ds-resultset-limit-mixin?branch=forEachAsync) [![Dependencies](http://img.shields.io/david/fullcube/loopback-ds-resultset-limit-mixin.svg?style=flat)](https://david-dm.org/fullcube/loopback-ds-resultset-limit-mixin) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework. It provides a mixin that makes it possible to limit the number of results returned from an API query.

This works in a similar way to a default scope - the difference being that it acts as a maximum limit constraint ensuring that no more results than the configured maximum will be served by the api, even if requested.

This affects remote remote API calls only and does not apply to internal usage of the API.


INSTALL
=============

```bash
npm install --save loopback-ds-resultset-limit-mixin
```

Then you should register the mixin in your app by adding `../node_modules/loopback-ds-resultset-limit-mixin/lib` to the `mixins` property to your `server/model-config.json` like the following:
```js
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/loopback-ds-resultset-limit-mixin/lib",
      "../common/mixins"
    ]
  }
}

```

CONFIG
=============

To use with your Models add the `mixins` attribute to the definition object of your model config.

```json
  {
    "name": "Item",
    "properties": {
      "name": "String",
      "description": "String",
      "status": "String"
    },
    "mixins": {
      "ResultsetLimit": {
        "limit": 100
      }
    }
  }
```

TESTING
=============

Run the tests in `test.js`

```bash
  npm test
```

Run with debugging output on:

```bash
  DEBUG='loopback:mixin:resultset-limit' npm test
```
