import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';

const SeondRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<About />} />
    </Routes>
  );
};

export default SeondRouts;
