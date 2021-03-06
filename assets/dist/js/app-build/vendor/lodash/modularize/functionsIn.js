'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFunctions = require('./_baseFunctions.js');

var _baseFunctions2 = _interopRequireDefault(_baseFunctions);

var _keysIn = require('./keysIn.js');

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of function property names from own and inherited
 * enumerable properties of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functions
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functionsIn(new Foo);
 * // => ['a', 'b', 'c']
 */
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash category="collection,function,date,lang,object,string" include="uniqueId" modularize exports="es"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function functionsIn(object) {
  return object == null ? [] : (0, _baseFunctions2.default)(object, (0, _keysIn2.default)(object));
}

exports.default = functionsIn;
//# sourceMappingURL=functionsIn.js.map
