# urlquery-to-object

Given a query string transform to a corresponding javascript object.

```
var queryObject = require('urlquery-to-string')
var querystring = 'one=1&two=2&three=3'
console.log(queryObject(querystring))

// {one: '1', two: '2', three: '3'}
```

Also, transform a query object into a query string:
```
var queryObject = require('urlquery-to-string')
var queryobj = {one: '1', two: '2', three: '3'}
console.log(queryObject.queryString(queryobj))

// 'one=1&two=2&three=3'
```

If necessary, change or add key/value pairs:
```
var queryObject = require('urlquery-to-string')
var queryobj = {one: '1', two: '2', three: '3'}
console.log(queryObject.queryString(queryobj, {two:'II', four:'4'}))

// 'one=1&two=II&three=3&four=4'
```

### install

```
npm install urlquery-to-string
```

### license

MIT
