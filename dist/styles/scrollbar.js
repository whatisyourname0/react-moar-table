"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var scrollbar = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 3px;\n    background-color: rgb(180, 180, 180);\n    :hover {\n      background-color: rgb(150, 150, 150);\n    }\n\n    :active {\n      background-color: rgb(120, 120, 120);\n    }\n  }\n\n  &::-webkit-scrollbar-button {\n    width: 0;\n    height: 0;\n  }\n"])));
var _default = scrollbar;
exports.default = _default;