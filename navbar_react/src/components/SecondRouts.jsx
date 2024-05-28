import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';

const SecondRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<About />} />
    </Routes>
  );
};

export default SecondRouts;
