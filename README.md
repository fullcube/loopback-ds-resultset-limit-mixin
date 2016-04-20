ITERATOR
=============

[![Circle CI](https://circleci.com/gh/fullcube/loopback-ds-resultset-limit-mixin.svg?style=svg)](https://circleci.com/gh/fullcube/loopback-ds-resultset-limit-mixin) [![Coverage Status](https://coveralls.io/repos/fullcube/loopback-ds-resultset-limit-mixin/badge.svg?branch=forEachAsync&service=github)](https://coveralls.io/github/fullcube/loopback-ds-resultset-limit-mixin?branch=forEachAsync) [![Dependencies](http://img.shields.io/david/fullcube/loopback-ds-resultset-limit-mixin.svg?style=flat)](https://david-dm.org/fullcube/loopback-ds-resultset-limit-mixin)

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework. It provides a mixin that makes it possible to limit the number of results returned from an API query.

INSTALL
=============

```bash
npm install --save loopback-ds-resultset-limit-mixin
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
  DEBUG='loopback-ds-resultset-limit-mixin' npm test
```
