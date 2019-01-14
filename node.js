var crypto = require('crypto')
var max = 0xFFFFFFFF

module.exports = random
module.exports.cryptographic = true

function random () {
  var buf = crypto
    .randomBytes(4)
    .readUInt32BE(0)

  return buf / max
}
