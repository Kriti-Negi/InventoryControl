import React from 'react'
import Logo from './Logo'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Logo/>
        <h3>Inventory Controls</h3>
      </div>
      <div>
        <Link to = "/orders">Orders</Link>
        <Link to = "/inventory">Inventory</Link>
        <Link to = "/moneycontrols">Revenue</Link>
        <Link to = "/">Log out</Link>
      </div>
    </nav>
  )
}

export default Navbar