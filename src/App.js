import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeUk from './Pages/HomeUk';
import HomeFr from './Pages/HomeFr';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uk" element={<HomeUk />} />
        <Route path="/fr" element={<HomeFr />} />
      </Routes>

    </div>
  );
}

export default App;
