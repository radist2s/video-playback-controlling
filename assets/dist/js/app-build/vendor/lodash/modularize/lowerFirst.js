'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCaseFirst = require('./_createCaseFirst.js');

var _createCaseFirst2 = _interopRequireDefault(_createCaseFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the first character of `string` to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.lowerFirst('Fred');
 * // => 'fred'
 *
 * _.lowerFirst('FRED');
 * // => 'fRED'
 */
var lowerFirst = (0, _createCaseFirst2.default)('toLowerCase'); /**
                                                                 * Lodash (Custom Build) <https://lodash.com/>
                                                                 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
                                                                 * Copyright JS Foundation and other contributors <https://js.foundation/>
                                                                 * Released under MIT license <https://lodash.com/license>
                                                                 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                                                                 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                                                                 */
exports.default = lowerFirst;
//# sourceMappingURL=lowerFirst.js.map
