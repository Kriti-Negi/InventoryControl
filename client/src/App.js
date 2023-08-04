import logo from './logo.svg';
import './App.css';

import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
