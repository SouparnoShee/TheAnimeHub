import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes} from "react-router-dom";
import AnimeSearch from './components/AnimeSearch';
import Home from './components/Home';

function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Search" element={<AnimeSearch/>} />
      </Routes>

      
    </>
  );
}

export default App;
