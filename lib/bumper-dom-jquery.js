// Generated by CoffeeScript 1.9.0

/*
 * * bumper | dom | jquery
 * * https://github.com/brewster1134/bumper
 * *
 * * @author Ryan Brewster
 * * Copyright (c) 2014
 * * Licensed under the MIT license.
 */

(function() {
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery'], function($) {
        return factory($);
      });
    } else if (typeof exports !== 'undefined') {
      return module.exports = factory(jQuery);
    } else {
      return factory(jQuery);
    }
  })(this, function($) {
    var BumperDom;
    BumperDom = (function(_super) {
      __extends(BumperDom, _super);

      function BumperDom() {
        return BumperDom.__super__.constructor.apply(this, arguments);
      }

      BumperDom.prototype.options = {
        parents: false
      };

      BumperDom.prototype.getElementData = function(string, rootEl) {
        var $element, $rootEl, arg, index, key, keyValue, match, matchData, matches, option, options, regex, stringArgs, stringArray, stringMethod, stringMethodArgs, stringOptions, stringOptionsObject, stringSelector, value, _base, _base1, _i, _j, _k, _len, _len1, _len2, _ref;
        $rootEl = $(rootEl);
        regex = /\{([^&]+)\}/g;
        matches = string.match(regex);
        if (!matches) {
          return string;
        }
        for (_i = 0, _len = matches.length; _i < _len; _i++) {
          match = matches[_i];
          stringArray = match.replace(/[{}]/g, '').split(':');
          stringSelector = stringArray[0];
          stringMethodArgs = stringArray[1];
          stringOptions = stringArray[2];
          stringOptionsObject = {};
          if (stringOptions) {
            _ref = stringOptions.split(',');
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              option = _ref[_j];
              keyValue = option.split('=');
              key = keyValue[0].trim();
              value = keyValue[1].trim();
              stringOptionsObject[key] = window.Bumper.Core.castType(value);
            }
          }
          options = $.extend({}, this.options, stringOptionsObject);
          stringArgs = stringMethodArgs.split(',');
          stringMethod = stringArgs.shift();
          $element = $rootEl.parent().closest("" + stringSelector);
          if (options.parents === false && !$element.length) {
            $element = $("" + stringSelector).first();
          }
          if (!$element.length) {
            $element = $rootEl.parent().closest(':visible');
          }
          if (!$element.length) {
            $element = $('body');
          }
          for (index = _k = 0, _len2 = stringArgs.length; _k < _len2; index = ++_k) {
            arg = stringArgs[index];
            stringArgs[index] = window.Bumper.Core.castType(arg);
          }
          value = $element[stringMethod].apply($element, stringArgs);
          matchData = {
            element: $element,
            selector: stringSelector,
            method: stringMethod,
            "arguments": stringArgs,
            options: options
          };
          value = (typeof (_base = $element.data('bumper-dom-function')) === "function" ? _base(value, matchData) : void 0) || value;
          value = (typeof (_base1 = $rootEl.data('bumper-dom-function')) === "function" ? _base1(value, matchData) : void 0) || value;
          string = string.replace(match, value);
        }
        return string;
      };

      return BumperDom;

    })(window.Bumper.Core.Module);
    window.Bumper || (window.Bumper = {});
    if (window.Bumper.Dom != null) {
      console.warn('There is already a dom handler loaded. It will be replaced by the jQuery handler', window.Bumper.Dom);
    }
    return window.Bumper.Dom = new BumperDom;
  });

}).call(this);
