(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "fontastic",
  "version": "0.1.0",
  "description": "A jQuery plugin for font selection",
  "main": "index.js",
  "scripts": {
    "build": "gulp",
    "test": "istanbul test _mocha -- --recursive"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/devinus/fontastic.git"
  },
  "keywords": [
    "font",
    "select",
    "selector",
    "picker"
  ],
  "author": "Devin Torres",
  "license": "CC0-1.0",
  "bugs": {
    "url": "https://github.com/devinus/fontastic/issues"
  },
  "homepage": "https://github.com/devinus/fontastic#readme",
  "devDependencies": {
    "babel-core": "^5.8.9",
    "babel-eslint": "^4.0.5",
    "babelify": "^6.1.3",
    "browserify": "^11.0.0",
    "gulp": "^3.9.0",
    "gulp-babel": "^5.1.0",
    "gulp-eslint": "^0.15.0",
    "gulp-sourcemaps": "^1.5.2",
    "gulp-uglify": "^1.2.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  }
}

},{}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _packageJson = require('../package.json');

var Plugin = (function () {
  function Plugin() {
    _classCallCheck(this, Plugin);

    this.version = _packageJson.version;
  }

  Plugin.prototype.init = function init(_ref) {
    var a = _ref[0];
    var b = _ref[1];

    return { a: a, b: b };
  };

  return Plugin;
})();

exports['default'] = Plugin;
module.exports = exports['default'];

},{"../package.json":1}]},{},[2])


//# sourceMappingURL=fontastic.js.map