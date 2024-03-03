import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js'; // Fix the casing of the import statement
import LoginPage from './pages/LoginPage.js'; // Fix the casing of the import statement
import Favourites from './pages/Favourites.js'; // Fix the casing of the import statement

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/favourites" element={<Favourites/>} />
    </Routes>
  );
}

export default App;