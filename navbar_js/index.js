// const currentURL = window.location.href;
// const targetURL = 'http://127.0.0.1:5500/navbar_js/index.html';
// if (currentURL !== targetURL) {
//   window.location.replace(targetURL);
// }
import { x } from './bashar-router-dom.js';

x();
const doc = (e) => document.getElementById(e);

const home = doc('home');
const about = doc('about');
const contact = doc('contact');
const root = doc('root');

// update the url
function updateURL(pathToAdd) {
  const currentURL = window.location.href;
  const pathsToRemove = ['/about', '/contact', '/home'];
  let updatedURL = currentURL;
  pathsToRemove.forEach((path) => {
    if (updatedURL.endsWith(path)) {
      updatedURL = updatedURL.replace(path, '');
    }
  });

  const separator = updatedURL.endsWith('/') ? '' : '/';

  const newURL = updatedURL + separator + pathToAdd;

  window.history.pushState(null, null, newURL);
}

about.addEventListener('click', () => {
  updateURL('about');
  render();
});
contact.addEventListener('click', () => {
  updateURL('contact');
  render();
});
home.addEventListener('click', () => {
  updateURL('home');
  render();
});

function render() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('/about')) {
    root.innerHTML = `<h1>About page!</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore consequatur</p>
    <span>
       About page!
    </span>`;
  } else if (currentPath.includes('/contact')) {
    root.innerHTML = `<h1>Contact page!</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore consequatur</p>
    <span>
       Contact page!
    </span>`;
  } else {
    root.innerHTML = `<h1>Home page!</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore consequatur</p>
    <span>
       Home page!
    </span>`;
  }
}
