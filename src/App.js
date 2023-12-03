import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeUk from './Pages/HomeUk';
import HomeFr from './Pages/HomeFr';
import Test from './Pages/Test';
import HomeDl from './Pages/HomeDl';
import HomeAu from './Pages/HomeAu';
import HomeCa from './Pages/HomeCa';
import HomeDk from './Pages/HomeDk';
import HomeSw from './Pages/HomeSw';
import HomeNo from './Pages/HomeNo';
import HomeEs from './Pages/HomeEs';
import HomeIt from './Pages/HomeIt';
import HomeNl from './Pages/HomeNl';
import HomeBe from './Pages/HomeBe';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uk" element={<HomeUk />} />
        <Route path="/fr" element={<HomeFr />} />
        <Route path="/dl" element={<HomeDl />} />
        <Route path="/au" element={<HomeAu />} />
        <Route path="/ca" element={<HomeCa />} />
        <Route path="/dk" element={<HomeDk />} />
        <Route path="/sw" element={<HomeSw />} />
        <Route path="/no" element={<HomeNo />} />
        <Route path="/es" element={<HomeEs />} />
        <Route path="/it" element={<HomeIt />} />
        <Route path="/nl" element={<HomeNl />} />
        <Route path="/be" element={<HomeBe />} />
        <Route path="/test" element={<Test />} />
      </Routes>

    </div>
  );
}

export default App;
