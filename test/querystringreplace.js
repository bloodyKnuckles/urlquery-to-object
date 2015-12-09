var queryObject = require('../')
var test = require('tape')

test('update query object, then to string', function (tt) {
    tt.plan(1)

    var queryobj = {one:'1', two:'2', three:'3'}
    var result = 'one=1&two=II&three=3'

    tt.deepEqual(queryObject.queryString(queryobj, {two:'II'}), result)
})

