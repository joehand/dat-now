var datNow = require('./index')

var key = process.env.KEY || 'beakerbrowser.com'

datNow(key, { sparse: true })
