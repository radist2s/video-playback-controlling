'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate2.default && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

exports.default = hashSet;
//# sourceMappingURL=_hashSet.js.map
