'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayMap = require('./_arrayMap.js');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0, _arrayMap2.default)(props, function (key) {
    return object[key];
  });
}

exports.default = baseValues;
//# sourceMappingURL=_baseValues.js.map
