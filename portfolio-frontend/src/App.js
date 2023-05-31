import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import GetCloudImage from './components/getImages/getCloudImage';
import NavBar from './components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/homePage';
import AboutPage from './pages/AboutPage/AboutPage';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
