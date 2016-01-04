var queryObject = require('../')
var test = require('tape')

test('add key/value pair to empty query object, then to string', function (tt) {
    tt.plan(2)

    var queryobj = {}
    var result = 'one=1'
    tt.deepEqual(queryObject.queryString(queryobj, {one: 1}), result)

    var result = 'one=false'
    tt.deepEqual(queryObject.queryString(queryobj, {one: false}), result)
})

