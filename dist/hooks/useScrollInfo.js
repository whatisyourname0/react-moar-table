"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useResizeObserver = _interopRequireDefault(require("./useResizeObserver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// For MS Edge support
var IS_EDGE = typeof navigator !== 'undefined' && /Edge\/d./i.test(window.navigator.userAgent);
var throttle = function throttle(func, wait) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  var later = function later() {
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    var now = Date().now;
    var rem = wait - now + previous;
    context = this;
    args = arguments;
    if (rem <= 0 || rem > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout) {
      timeout = setTimeout(later, rem);
    }
    return result;
  };
};

/**
 *
 * @param {Number} throttleTime throttle time for performance issue. Default number is 50(ms).
 * @returns {Object} [scroll, setRef, ref]
 *
 * scroll : Scroll information object
 *
 * setRef : Dispatcher of referenced object. Reference element using 'ref' attribute to bind.
 *
 * ref : referenced element itself. Mostly not useful.
 */
var useScrollInfo = function useScrollInfo() {
  var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var _useState = (0, _react.useState)({
      x: {},
      y: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    scroll = _useState2[0],
    setScroll = _useState2[1];
  var ref = (0, _react.useRef)(null);
  var previousScroll = (0, _react.useRef)(null);
  var updateObserver = function updateObserver() {
    var element = ref.current;
    var maxX = element.scrollWidth - element.clientWidth;
    var maxY = element.scrollHeight - element.clientHeight;
    if (IS_EDGE && maxY === 1 && element.scrollTop === 0) {
      maxY = 0;
    }
    var xRatio = maxX !== 0 ? element.scrollLeft / maxX : null;
    var yRatio = maxY !== 0 ? element.scrollTop / maxY : null;
    var previous = previousScroll.current;
    var scrollInfo = {
      x: {
        percentage: xRatio,
        value: element.scrollLeft,
        total: maxX,
        delta: previous ? Math.sign(element.scrollLeft - previous.x.value) : 0
      },
      y: {
        percentage: yRatio,
        value: element.scrollTop,
        total: maxY,
        delta: previous ? Math.sign(element.scrollTop - previous.y.value) : 0
      }
    };
    previousScroll.current = scrollInfo;
    setScroll(scrollInfo);
  };
  (0, _useResizeObserver.default)(ref, function () {
    updateObserver();
  });
  var throttleUpdate = throttle(updateObserver, throttleTime);
  var setRef = (0, _react.useCallback)(function (node) {
    if (node) {
      node.addEventListener('scroll', throttleUpdate);
      if (!window.ResizeObserver) {
        window.addEventListener('resize', throttleUpdate);
      }
      ref.current = node;
      throttleUpdate(); // throttling initialization
    } else if (ref.current) {
      ref.current.removeEventListener('scroll', throttleUpdate);
      if (!window.ResizeObserver) {
        window.removeEventListener('resize', throttleUpdate);
      }
    }
  }, []);
  return [scroll, setRef, ref];
};
var _default = useScrollInfo;
exports.default = _default;