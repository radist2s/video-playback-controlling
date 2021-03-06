'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Uint8Array = require('./_Uint8Array.js');

var _Uint8Array2 = _interopRequireDefault(_Uint8Array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array2.default(result).set(new _Uint8Array2.default(arrayBuffer));
  return result;
}

exports.default = cloneArrayBuffer;
//# sourceMappingURL=_cloneArrayBuffer.js.map
