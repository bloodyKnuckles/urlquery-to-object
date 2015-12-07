var xtend = require('xtend')

module.exports = function (querystring) {
    querystring = querystring || ''
    return querystring.split('&').reduce(function (prev, next) {
        var nextarr = next.split('=')
        var nextobj = {}
        nextobj[nextarr[0]] = nextarr[1]
        return xtend(prev, nextobj)
    }, {})
}
