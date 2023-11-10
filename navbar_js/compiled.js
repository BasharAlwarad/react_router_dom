"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@emotion/react");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var App = function App() {
  return /*#__PURE__*/React.createElement("div", {
    css: styles
  }, /*#__PURE__*/React.createElement("h1", null, "Hello, JSX without React!"), /*#__PURE__*/React.createElement("p", null, "This is a simple example."));
};
var styles = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n  font-family: Arial, sans-serif;\n"])));
var _default = App; // /** @jsx jsx */
// function jsx(tag, props, ...children) {
//   const element = document.createElement(tag);
//   for (const key in props) {
//     if (key.startsWith('on')) {
//       element.addEventListener(key.toLowerCase().substring(2), props[key]);
//     } else {
//       element[key] = props[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'string') {
//       element.appendChild(document.createTextNode(child));
//     } else {
//       element.appendChild(child);
//     }
//   });
//   return element;
// }
// function App() {
//   return (
//     <div>
//       <h1>Hello, JSX without React!</h1>
//       <p>This is a simple example.</p>
//     </div>
//   );
// }
// const root = document.getElementById('root');
// root.appendChild(<App />);
// /** @jsx createElement */
// function createElement(tag, props, ...children) {
//   const element = document.createElement(tag);
//   for (const key in props) {
//     if (key.startsWith('on')) {
//       element.addEventListener(key.toLowerCase().substring(2), props[key]);
//     } else {
//       element[key] = props[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'string') {
//       element.appendChild(document.createTextNode(child));
//     } else {
//       element.appendChild(child);
//     }
//   });
//   return element;
// }
// function App() {
//   return createElement(
//     'div',
//     null,
//     createElement('h1', null, 'Hello, JSX without React!')
//   );
// }
// const root = document.getElementById('root');
// root.appendChild(App());
exports["default"] = _default;
