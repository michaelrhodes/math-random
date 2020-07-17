var random = require('./')
var unique = require('array-unique')
var iterations = 10000
var n, cache = []

for (var i = 0; i < iterations; i++) {
  n = random()
  if (typeof n !== 'number') {
    fail('Random numbers should be numbers')
    break
  }
  if (n < 0) {
    fail('Random numbers should be greater than or equal to zero')
    break
  }
  if (n >= 1) {
    fail('Random numbers should be less than one')
    break
  }
  cache.push(n)
}

if (unique(cache).length !== iterations) {
  fail('Random numbers should be unique')
}

function fail (msg) {
  console.assert(false, msg)
}
