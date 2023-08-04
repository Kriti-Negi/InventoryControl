import React from 'react'

import Logo from '../components/Logo'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import BasicButton from '../components/BasicButton'

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <div>
        <Logo/>
        <Heading text = "Inventory Control"/>
        <SubHeading text = "Take change of your business. One order at a time."/>
        <Link to = "/signup">
          <BasicButton text = "Get Started." onClick = {() => {}}/>
        </Link>
      </div>
    </main>
  )
}

export default LandingPage
