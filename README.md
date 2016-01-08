# urlquery-to-object

Given a query string transform to a corresponding javascript object.

```
var queryObject = require('urlquery-to-object')
var querystring = 'one=1&two=2&three=3'
console.log(queryObject(querystring))

// {one: 1, two: 2, three: 3}
```

Also, transform a query object into a query string:
```
var queryObject = require('urlquery-to-object')
var queryobj = {one: 1, two: 2, three: 3}
console.log(queryObject.queryString(queryobj))

// 'one=1&two=2&three=3'
```

If needed, change or add key/value pairs:
```
var queryObject = require('urlquery-to-object')
var queryobj = {one: 1, two: 2, three: 3}
console.log(queryObject.queryString(queryobj, {two:'II', three:undefined, four:4}))

// 'one=1&two=II&four=4'
```

And convert array values:
```
var queryObject = require('urlquery-to-object')
var queryobj = {one: 1, two: 2, three: 3}
console.log(queryObject.queryString(queryobj, {four:[4,'eight']}))

// 'one=1&two=2&three=3&four=4&four=eight'
```

### install

```
npm install urlquery-to-object
```

### license

MIT
