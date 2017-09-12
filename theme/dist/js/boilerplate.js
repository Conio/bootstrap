'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Conio Bootstrap Theme (v0.2.0): boilerplate.js
 * Licensed under MIT (https://github.com/Conio/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Boilerplate = function () {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'boilerplate';
  var VERSION = '0.2.0';
  var DATA_KEY = 'conio.boilerplate';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="boilerplate"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'boilerplate',
    FADE: 'fade',
    SHOW: 'show'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Boilerplate = function () {
    function Boilerplate(element) {
      _classCallCheck(this, Boilerplate);

      this._element = element;
    }

    // getters

    _createClass(Boilerplate, [{
      key: 'close',


      // public

      value: function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);
        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_getRootElement',
      value: function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest('.' + ClassName.ALERT)[0];
        }

        return parent;
      }
    }, {
      key: '_triggerCloseEvent',
      value: function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);

        $(element).trigger(closeEvent);
        return closeEvent;
      }
    }, {
      key: '_removeElement',
      value: function _removeElement(element) {
        var _this = this;

        $(element).removeClass(ClassName.SHOW);

        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);
          return;
        }

        $(element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: '_destroyElement',
      value: function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Boilerplate(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      }
    }, {
      key: '_handleDismiss',
      value: function _handleDismiss(boilerplateInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          boilerplateInstance.close(this);
        };
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Boilerplate;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Boilerplate._handleDismiss(new Boilerplate()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Boilerplate._jQueryInterface;
  $.fn[NAME].Constructor = Boilerplate;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Boilerplate._jQueryInterface;
  };

  return Boilerplate;
}(jQuery);
//# sourceMappingURL=boilerplate.js.map