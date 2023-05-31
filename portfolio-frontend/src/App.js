import './App.css';

import React from 'react';
//import GetCloudImage from './components/getImages/getCloudImage';
import NavBar from './components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/homePage';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <HomePage />
      {/*<GetCloudImage searchTerm="myImage.jpg"/>*/}
    </div>
  );
}

export default App;
