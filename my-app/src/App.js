import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js'; // Fix the casing of the import statement

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
    </Routes>
  );
}

export default App;