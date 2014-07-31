// Generated by CoffeeScript 1.7.1

/*
 * * bumper | responsive | images | background
 * * https://github.com/brewster1134/bumper
 * *
 * * @version 0.0.1
 * * @author Ryan Brewster
 * * Copyright (c) 2014
 * * Licensed under the MIT license.
 */

(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'bumper-core'], function() {
        return factory($);
      });
    } else {
      return window.Bumper.Responsive.Image.Background = factory($);
    }
  })(this, function($) {
    var ResponsiveBg;
    ResponsiveBg = (function() {
      function ResponsiveBg() {}

      ResponsiveBg.prototype.resizeEl = function($el, breakpoint) {
        var bpParams, defaultParams, params, url;
        url = $el.data('bumper-responsive-image-background-url');
        if (!url) {
          console.warn('data-bumper-responsive-image-background-url is not set on: ', $el);
          return;
        }
        defaultParams = $el.data('bumper-responsive-image-background-url-params');
        bpParams = $el.data("bumper-responsive-image-background-url-params-" + breakpoint);
        params = [defaultParams, bpParams].filter(function(n) {
          return n !== void 0 && n !== null && n !== '';
        });
        params = params.length ? "?" + (params.join('&')) : '';
        return $el.css({
          backgroundImage: "url(" + url + params + ")"
        });
      };

      ResponsiveBg.prototype.resizeAll = function(breakpoint) {
        var _this;
        _this = this;
        return $('.responsivebg').each(function() {
          return _this.resizeEl($(this), breakpoint);
        });
      };

      return ResponsiveBg;

    })();
    return new ResponsiveBg;
  });

}).call(this);