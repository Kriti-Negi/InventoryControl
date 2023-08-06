import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowCircleRight, FaBoxOpen, FaDollarSign, FaInbox } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
       <Link to="/home">
       <div className="flex items-center">
          <Logo />
          <h3 className="text-black text-xl ml-2 font-semibold">Inventory Controls</h3>
        </div>
       </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/orders"
            className="text-black hover:text-blue-500 transition duration-300 border border-black p-2 rounded-md"
          >
            <div className="flex items-center">
              <FaBoxOpen className="text-black mt-1 mr-1" />
              <p>Orders</p>
            </div>
          </Link>
          <Link
            to="/inventory"
            className="text-black hover:text-blue-500 transition duration-300 border border-black p-2 rounded-md"
          >
            <div className="flex items-center">
              <FaInbox className="text-black mt-1 mr-1" />
              <p>Inventory</p>
            </div>
          </Link>
          <Link
            to="/moneycontrols"
            className="text-black hover:text-blue-500 transition duration-300 border border-black p-2 rounded-md"
          >
            <div className="flex items-center">
              <FaDollarSign className="text-black mt-1 mr-1" />
              <p>Money Controls</p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-black hover:text-blue-500 transition duration-300 border border-black p-2 rounded-md"
          >
            <div className="flex items-center">
              <FaArrowCircleRight className="text-black mt-1 mr-1" />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
