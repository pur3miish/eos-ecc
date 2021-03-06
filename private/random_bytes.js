'use strict'

/**
 * Universally generate a strong psudorandom byte array.
 * @kind function
 * @name random_bytes
 * @param {number} bytes Length of random byte array.
 * @returns {Uint8Array} Random bytes array.
 * @ignore
 */
async function random_bytes(bytes = 32) {
  if (typeof window == 'undefined') {
    // https://github.com/mysticatea/eslint-plugin-node/issues/250
    // eslint-disable-next-line
    const { randomBytes } = await import('crypto')
    return Uint8Array.from([...randomBytes(bytes)])
  } else return crypto.getRandomValues(new Uint8Array(bytes))
}

module.exports = random_bytes
