import { jsx, css } from '@emotion/react';

const App = () => (
  <div css={styles}>
    <h1>Hello, JSX without React!</h1>
    <p>This is a simple example.</p>
  </div>
);

const styles = css`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export default App;

// /** @jsx jsx */

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
