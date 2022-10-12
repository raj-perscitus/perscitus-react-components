"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardInfo;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardInfo(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      Component = _ref.Component,
      close = _ref.close;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "card-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-info-title d-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-section"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo192.png"
  }), /*#__PURE__*/_react.default.createElement("h6", null, "Notification")), /*#__PURE__*/_react.default.createElement("div", {
    className: "close-section"
  }, "Close")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-info-body"
  }, Component && /*#__PURE__*/_react.default.createElement(Component, null)));
}

CardInfo.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
CardInfo.defaultProps = {
  backgroundColor: null,
  onClick: undefined
};