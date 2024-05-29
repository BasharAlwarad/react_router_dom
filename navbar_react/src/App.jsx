import { Routes, Route, BrowserRouter } from 'react-router-dom';


import Second from './components/SecondRouts';
import Users from './pages/Users';
import User from './pages/User';
import Error from './pages/Error';
import Info from './components/Info';
import Nav from './components/Nav'
import Address from './components/Address';
import Search from './components/Search'

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/search' element={<Search />} />
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
