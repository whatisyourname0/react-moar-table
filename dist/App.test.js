"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("jest-styled-components");
require("@testing-library/jest-dom");
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(_react2.cleanup);
var testColumn = [{
  Header: 'Run ID',
  accessor: 'info.run_id'
}];
var testData = [{
  info: {
    run_id: 'test1'
  }
}, {
  info: {
    run_id: 'test2'
  }
}];
test('Render Test', function () {
  var utils = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {
    columns: testColumn,
    data: testData
  }));
  expect(utils.container).toMatchSnapshot();
});
test('Inner Text Test', function () {
  (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {
    columns: testColumn,
    data: testData
  }));
  var columnID = _react2.screen.getByText('Run ID');
  var runID1 = _react2.screen.getByText('test1');
  var runID2 = _react2.screen.getByText('test2');
  expect(columnID).toBeInTheDocument();
  expect(runID1).toBeInTheDocument();
  expect(runID2).toBeInTheDocument();
});