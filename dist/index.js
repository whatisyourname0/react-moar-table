"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./styles/global.css");
require("./styles/normalize.css");
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {}));