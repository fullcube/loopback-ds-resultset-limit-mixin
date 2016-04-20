const TestDataBuilder = require('loopback-testing').TestDataBuilder
const ref = TestDataBuilder.ref
const lt = require('loopback-testing')
const path = require('path')
const chai = require('chai')
const expect = chai.expect

const SIMPLE_APP = path.join(__dirname, 'fixtures', 'simple-app')
const app = require(path.join(SIMPLE_APP, 'server', 'server.js'))

describe('REST API', () => {
  // Initialize the app.
  lt.beforeEach.withApp(app)

  // // Create 4 products.
  before(function(done) {
    new TestDataBuilder()
      .define('product1', app.models.Product)
      .define('product2', app.models.Product)
      .define('product3', app.models.Product)
      .define('product4', app.models.Product)
      .define('product5', app.models.Product)
      .define('product1-part1', app.models.Part, {
        productId: ref('product1.id'),
      })
      .define('product1-part2', app.models.Part, {
        productId: ref('product1.id'),
      })
      .define('product1-part3', app.models.Part, {
        productId: ref('product1.id'),
      })
      .define('product1-part4', app.models.Part, {
        productId: ref('product1.id'),
      })
      .define('product1-part5', app.models.Part, {
        productId: ref('product1.id'),
      })
      .buildTo(this, done)
  })

  describe('Without specifying a limit', () => {
    const url = '/api/Products'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
    })
  })

  describe('Specify a limit less than the max limit', () => {
    const url = '/api/Products?filter[limit]=2'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 2 products', function() {
        expect(this.res.body).to.have.length(2)
      })
    })
  })

  describe('Specify a limit greater than the max limit', () => {
    const url = '/api/Products?filter[limit]=4'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
    })
  })

  describe('Specify a limit greater than the max limit (string syntax)', () => {
    const url = '/api/Products?filter={"limit": 4}'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
    })
  })

  describe('Include a relationship', () => {
    const url = '/api/Products?filter[include]=parts'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
      it('should only list 3 related items (parts)', function() {
        expect(this.res.body[0].parts).to.have.length(3)
      })
    })
  })

  describe('Include a relationship with specified limit less than max limit', () => {
    const url = '/api/Products?filter[include][0][relation]=parts&filter[include][0][scope][limit]=2'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
      it('should only list 2 related items (parts)', function() {
        expect(this.res.body[0].parts).to.have.length(2)
      })
    })
  })

  describe('Include a relationship with specified limit greater than max limit', () => {
    const url = '/api/Products?filter[include][0][relation]=parts&filter[include][0][scope][limit]=4'

    lt.describe.whenCalledRemotely('GET', url, function() {
      it('should only list 3 products', function() {
        expect(this.res.body).to.have.length(3)
      })
      it('should only list 3 related items (parts)', function() {
        expect(this.res.body[0].parts).to.have.length(3)
      })
    })
  })

})
