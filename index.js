var xtend = require('xtend')

module.exports = function urlQueryToObject (querystring) {
  urlQueryToObject.queryString = function (queryobj, replquery) {

    if ( (undefined === queryobj ||
        !((!!queryobj) && (queryobj.constructor  === Object))) &&
        (undefined === replquery || {} === replquery)
    ) { return '' }

    replquery = (!!replquery) && (replquery.constructor === Object)? replquery: {}
    Object.keys(replquery).forEach(function (querykey) {
      if ( undefined === replquery[querykey] ) {
        delete queryobj[querykey]
      }
      else {
        queryobj[querykey] = replquery[querykey]
      }
    })

    return Object.keys(queryobj).reduce(function (queryarr, objkey) {
      if ( 'string' === typeof queryobj[objkey] ||
        'number' === typeof queryobj[objkey] ||
        'boolean' === typeof queryobj[objkey]
      ) {
        queryarr.push(objkey + '=' + queryobj[objkey])
      }
      else if ( Array.isArray(queryobj[objkey]) ) {
        queryobj[objkey].forEach(function (item) {
          queryarr.push(objkey + '=' + item)
        })
      }
      return queryarr
    }, []).join('&')
  }

  if (
    undefined === querystring ||
    'string' !== typeof querystring ||
    querystring.match(/^\s*$/)
  ) { return {} }

  return querystring.split('&').reduce(function (prev, next) {
    var nextarr = next.split('=')
    var nextobj = {}
    nextobj[nextarr[0]] = nextarr[1]
    return xtend(prev, nextobj)
  }, {})
}

