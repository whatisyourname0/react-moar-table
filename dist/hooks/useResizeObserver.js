"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var useResizeObserver = function useResizeObserver(ref, cb) {
  (0, _react.useEffect)(function () {
    if (typeof window !== 'undefined' && window.ResizeObserver) {
      var observer = new ResizeObserver(function (entries) {
        window.requestAnimationFrame(function () {
          if (!(Array.isArray(entries) && entries.length)) {
            return;
          }
          cb(entries[0].contentRect);
        });
      });
      observer.observe(ref.current);
      return function () {
        observer.disconnect();
      };
    }
  }, [ref]);
};
var _default = useResizeObserver;
exports.default = _default;