var assert = require('assert')
var Dat = require('dat')
var xtend = require('xtend')

module.exports = function (key, opts) {
  assert.ok(key, 'dat-now: key required')
  opts = xtend({
    key: key
  }, opts)

  // now.sh only allows files in /tmp folder
  Dat('/tmp', opts, function (err, dat) {
    if (err) throw err
    dat.joinNetwork({utp: false, upload: false}) // required options to work on now.sh
    dat.serveHttp({port: 8080, exposeHeaders: true, footer: `Sharing via dat on now.sh.`})
  })
}
