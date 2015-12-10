var xtend = require('xtend')

module.exports = function urlQueryToObject (querystring) {
    urlQueryToObject.queryString = function (queryobj, replquery) {
        if (
            undefined === queryobj ||
            !((!!queryobj) && (queryobj.constructor  === Object))
        ) { return '' }
        replquery = (!!replquery) && (replquery.constructor === Object)? replquery: {}
        Object.keys(replquery).forEach(function (querykey) {
            queryobj[querykey] = replquery[querykey]
        })
        return Object.keys(queryobj).reduce(function (queryarr, objkey) {
            queryarr.push(objkey + '=' + queryobj[objkey])
            return queryarr
        }, []).join('&')
    }

    if (
        undefined === querystring ||
        'string' !== typeof querystring ||
        -1 === querystring.indexOf('=')
    ) { return {} }

    return querystring.split('&').reduce(function (prev, next) {
        var nextarr = next.split('=')
        var nextobj = {}
        nextobj[nextarr[0]] = nextarr[1]
        return xtend(prev, nextobj)
    }, {})
}

