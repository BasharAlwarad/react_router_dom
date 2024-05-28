import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import Contact from './pages/Contact';
import About from './pages/About';
import Second from './components/SecondRouts';
import Users from './pages/Users';
import User from './pages/User';
import Error from './pages/Error';
import Info from './components/Info';
import Nav from './components/Nav'
import Address from './components/Address';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Nav param />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />}>
            <Route index element={<Home />} />
            <Route path='address' element={<Address />} />
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
