import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js'; // Fix the casing of the import statement
import LoginPage from './pages/LoginPage.js'; // Fix the casing of the import statement
import Favourites from './pages/Favourites.js'; // Fix the casing of the import statement
import SearchPage from './pages/SearchPage.js'; // Fix the casing of the import statement
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/favourites" element={<Favourites/>} />
      <Route path="/search" element={<SearchPage/>} />
    </Routes>
  );
}

export default App;