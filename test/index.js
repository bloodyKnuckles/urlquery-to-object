var queryObject = require('../')
var test = require('tape')

test('url query string to object', function (tt) {
    tt.plan(4)

    var querystring = 'one=1&two=2&three=3&four'
    var result = {one: '1', two: '2', three: '3', four: undefined}

    tt.deepEqual(queryObject(querystring), result)
    tt.deepEqual(queryObject(), {})
    tt.deepEqual(queryObject(''), {})

    querystring = 'four'
    result = 0

    tt.equal(Object.keys(queryObject(querystring)).indexOf('four'), result)
})

