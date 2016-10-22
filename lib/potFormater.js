'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Formatting POT comments
 * @param {Object[]}
 * @return {String}
 *
 * example: see tests
 *
 * @author Michael Hsu
 */
var potCommentsFormater = function potCommentsFormater(messageList) {
  return messageList.reduce(function (acc, _ref) {
    var filename = _ref.filename;
    var id = _ref.id;
    var description = _ref.description;
    return acc + '#: ' + filename + '\n#. [' + id + '] - ' + description + '\n';
  }, '');
};

/**
 * Formatting POT comments
 * @param {Object}
 * @return {String}
 *
 * example: see tests
 *
 * @author Michael Hsu
 */

var potFormater = function potFormater(messageValue) {
  return function (messageObject) {
    return Object.keys(messageObject) // return array of id
    .sort().map(function (id) {
      return potCommentsFormater(messageObject[id]) + 'msgid "' + id + '"\nmsgstr "' + (messageValue ? messageObject[id][0][messageValue] : '') + '"\n';
    }).join('\n');
  };
};

exports.default = potFormater;
module.exports = exports['default'];