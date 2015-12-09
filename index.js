var xtend = require('xtend')

module.exports = function urlQueryToObject (querystring) {
    querystring = querystring || ''
    urlQueryToObject.queryString = function (queryobj) {
        queryobj = queryobj || {}
        return Object.keys(queryobj).reduce(function (queryarr, objkey) {
            queryarr.push(objkey + '=' + queryobj[objkey])
            return queryarr
        }, []).join('&')
    }
    return querystring.split('&').reduce(function (prev, next) {
        var nextarr = next.split('=')
        var nextobj = {}
        nextobj[nextarr[0]] = nextarr[1]
        return xtend(prev, nextobj)
    }, {})
}

