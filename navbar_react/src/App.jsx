import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import Contact from './pages/Contact';
import About from './pages/About';
import Second from './components/SeondRouts';
import Users from './pages/Users';
import User from './pages/User';
import Error from './pages/Error';
import Features from './components/Features';
import Info from './components/Info';

function App() {
  const Nav = () => {
    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'red' : 'black',
      };
    };
    return (
      <nav>
        <ul>
          <li>
            <NavLink style={navLinkStyles} to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={'about'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={'/contact'}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={'/users'}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={'/search'}>
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Nav param />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users names={name} id={id} />} />
          <Route path='/users/:id' element={<User />}>
            <Route index element={<Home />} />
            <Route path='features' element={<Features />} />
            <Route path='info' element={<Info />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
        <Second />
      </BrowserRouter>
    </>
  );
}
export default App;

// const LazyAbout = React.lazy(() => import('./pages/About'));

{
  /* <Route
  path='/about'
  element={
    <React.Suspense fallback='Loading...'>
    <LazyAbout />
    </React.Suspense>
  }
/> */
}

// import Search from './components/Search';

{
  /* <Route path='/search' element={<Search />} /> */
}
