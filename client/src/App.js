import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';

function App() {
  return (
    <div>
     <BrowserRouter>
     <div>
      <Navbar/>
     </div>
      <Routes>
        <Route path='/' element={<LandingPage/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/inventory' element={<Inventory/>} exact/>
        <Route path='/money_control' element={<Inventory/>} exact/>
        <Route path='/orders' element={<Orders/>} exact/>
      </Routes>
      <div>
        <Footer/>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
