import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'
import Inventory from './pages/Inventory'
import Home from './pages/Home'
import Orders from './pages/Orders'
import MoneyControl from './pages/MoneyControl';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/inventory" element = {<Inventory/>}/>
        <Route path = "/orders" element = {<Orders/>}/>
        <Route path = "/moneycontrols" element = {<MoneyControl/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
