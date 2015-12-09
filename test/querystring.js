var queryObject = require('../')
var test = require('tape')

test('query object to string', function (tt) {
    tt.plan(1)

    var queryobj = {one:'1', two:'2', three:'3'}
    var result = 'one=1&two=2&three=3'

    tt.deepEqual(queryObject.queryString(queryobj), result)
})

