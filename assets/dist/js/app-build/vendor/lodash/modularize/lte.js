'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRelationalOperation = require('./_createRelationalOperation.js');

var _createRelationalOperation2 = _interopRequireDefault(_createRelationalOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is less than or equal to `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than or equal to
 *  `other`, else `false`.
 * @see _.gte
 * @example
 *
 * _.lte(1, 3);
 * // => true
 *
 * _.lte(3, 3);
 * // => true
 *
 * _.lte(3, 1);
 * // => false
 */
var lte = (0, _createRelationalOperation2.default)(function (value, other) {
  return value <= other;
}); /**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
exports.default = lte;
//# sourceMappingURL=lte.js.map
