var queryObject = require('../')
var test = require('tape')

test('url query string to object', function (tt) {
    tt.plan(1)

    var querystring = 'one=1&two=2&three=3'
    var result = {one: '1', two: '2', three: '3'}

    tt.deepEqual(queryObject(querystring), result)
})

