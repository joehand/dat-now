#!/usr/bin/env node

var datNow = require('./index')

if (!process.env.KEY) {
  console.error('Set your process.env.KEY in now.json or package.json')
  process.exit(1)
}

console.log('serving dat via dat-now and now.sh')
console.log(process.env.KEY)
datNow(process.env.KEY)
