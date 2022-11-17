"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactTable = require("react-table");
var _reactTableSticky = require("react-table-sticky");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _useScrollInfo3 = _interopRequireDefault(require("./hooks/useScrollInfo"));
var _textTruncate = _interopRequireDefault(require("./styles/textTruncate"));
var _scrollbar = _interopRequireDefault(require("./styles/scrollbar"));
var _jsxRuntime = require("react/jsx-runtime");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    minWidth = _ref.minWidth,
    width = _ref.width,
    hoveredColor = _ref.hoveredColor,
    clickedColor = _ref.clickedColor;
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    hoveredCell = _useState2[0],
    setHoveredCell = _useState2[1];
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    clickedCell = _useState4[0],
    setClickedCell = _useState4[1];
  var _useScrollInfo = (0, _useScrollInfo3.default)(),
    _useScrollInfo2 = _slicedToArray(_useScrollInfo, 2),
    scrollInfo = _useScrollInfo2[0],
    setRef = _useScrollInfo2[1];
  var defaultColumn = (0, _react.useMemo)(function () {
    return {
      minWidth: Number(minWidth),
      width: Number(width)
    };
  }, [minWidth, width]);
  var _useTable = (0, _reactTable.useTable)({
      columns: columns,
      data: data,
      defaultColumn: defaultColumn
    }, _reactTableSticky.useSticky, _reactTable.useBlockLayout, _reactTable.useResizeColumns, _reactTable.useSortBy),
    getTableProps = _useTable.getTableProps,
    getTableBodyProps = _useTable.getTableBodyProps,
    headerGroups = _useTable.headerGroups,
    rows = _useTable.rows,
    prepareRow = _useTable.prepareRow;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TableWrapper, {
    hoveredCell: hoveredCell,
    hoveredColor: hoveredColor,
    clickedCell: clickedCell,
    clickedColor: clickedColor,
    onMouseLeave: function onMouseLeave() {
      return setHoveredCell(undefined);
    },
    ref: setRef,
    xRatio: scrollInfo.x.percentage,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
        children: headerGroups.map(function (headerGroup, idx) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column, idx) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                onClick: function onClick() {
                  setClickedCell(idx + 1);
                  column.toggleSortBy(!column.isSortedDesc);
                },
                onMouseOver: function onMouseOver() {
                  return setHoveredCell(idx + 1);
                },
                children: [column.render('Header'), /*#__PURE__*/(0, _jsxRuntime.jsx)(SortedSpan, {
                  children: column.isSorted ? column.isSortedDesc ? '\t⬇︎' : '\t⬆︎' : ''
                }), column.canResize && /*#__PURE__*/(0, _jsxRuntime.jsx)(Resizer, _objectSpread(_objectSpread({}, column.getResizerProps()), {}, {
                  onClick: function onClick(event) {
                    return event.stopPropagation();
                  }
                }))]
              }), idx);
            })
          }), idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map(function (row, idx) {
          prepareRow(row);
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(function (cell, idx) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", _objectSpread(_objectSpread({
                onMouseOver: function onMouseOver() {
                  return setHoveredCell(idx + 1);
                }
              }, cell.getCellProps()), {}, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextWrapper, {
                  children: cell.render('Cell')
                })
              }), idx);
            })
          }), idx);
        })
      }))]
    }))
  });
}
App.propTypes = {
  columns: _propTypes.default.array.isRequired,
  data: _propTypes.default.array.isRequired,
  minWidth: _propTypes.default.number || _propTypes.default.string,
  width: _propTypes.default.number || _propTypes.default.string,
  hoveredColor: _propTypes.default.string,
  clickedColor: _propTypes.default.string
};
App.defaultProps = {
  minWidth: 80,
  width: 150,
  hoveredColor: '#f1f1f1',
  clickedColor: '#e6f6ff'
};
var _default = App;
exports.default = _default;
var TextWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), _textTruncate.default);
var Resizer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  width: 0;\n  height: 100%;\n\n  background: #bdbdbd;\n  z-index: 1;\n  touch-action: none;\n\n  transition: 0.2s ease;\n"])));
var SortedSpan = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 16px;\n"])));
var addTableEdge = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-shadow: 3px 3px 3px #939393;\n"])));

// Style table at here!
// If wrapping inner jsx element with styled, react throws warning!
var TableWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 16px;\n  font-size: 16px;\n\n  overflow-x: auto;\n  white-space: nowrap;\n  user-select: none;\n  ", ";\n\n  table {\n    border-spacing: 0;\n    text-align: center;\n    will-change: background-color;\n\n    [data-sticky-td] {\n      position: sticky !important;\n      background-color: #fafafa;\n    }\n\n    [data-sticky-last-left-td] {\n      ", ";\n    }\n\n    thead {\n      overflow-y: auto;\n      overflow-x: hidden;\n\n      th {\n        border-bottom: 1px solid black;\n        background-color: #f4f4f4;\n\n        :hover {\n          ", " {\n            width: 7.5px;\n          }\n        }\n\n        :active {\n          ", " {\n            width: 15px;\n            background-color: #8e8e8e;\n          }\n        }\n      }\n    }\n\n    tbody {\n      overflow-y: scroll;\n      overflow-x: hidden;\n    }\n\n    th,\n    td {\n      position: relative;\n      margin: 0;\n      padding: 10px 15px;\n      overflow: hidden;\n      background: #f9f9f9;\n\n      transition: 0.2s ease;\n    }\n\n    th:nth-child(", "),\n    td:nth-child(", "),\n    tbody tr:hover {\n      background-color: ", ";\n\n      td {\n        background-color: ", ";\n      }\n    }\n\n    th:nth-child(", "),\n    td:nth-child(", ") {\n      background-color: ", " !important;\n    }\n  }\n"])), _scrollbar.default, function (props) {
  return props.xRatio !== 0 ? addTableEdge : null;
}, Resizer, Resizer, function (props) {
  return props.hoveredCell;
}, function (props) {
  return props.hoveredCell;
}, function (props) {
  return props.hoveredColor;
}, function (props) {
  return props.hoveredColor;
}, function (props) {
  return props.clickedCell;
}, function (props) {
  return props.clickedCell;
}, function (props) {
  return props.clickedColor;
});