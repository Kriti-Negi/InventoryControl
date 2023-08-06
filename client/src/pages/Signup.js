import React, {useState} from 'react'

import Logo from '../components/Logo'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import BasicButton from '../components/BasicButton'
import SignUpLogInTextInput from '../components/SignUpLogInTextInput'

import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function updateValues(e){
    if(e.target.placeholder === "username"){
      setUsername(e.target.value);
    }else if(e.target.placeholder === "password"){
      setPassword(e.target.value);
    }else if(e.target.placeholder === "email"){
      setEmail(e.target.value);
    }else if(e.target.placeholder === "confirm password"){
      setConfirmPassword(e.target.value);
    }
  }

  function SignUserIn(){
    console.log("*backend magic*")
  }

  return (
    <main>
      <div>
        <Logo/>
        <Heading text = "Sign Up."/>
        <SubHeading text = "Take change of your business." />
      </div>
      <div>
        <form>
          <div>
            <SignUpLogInTextInput type = "text" placeholder = "email" onChange = {(e) => updateValues(e)} value = {email}/>
            <SignUpLogInTextInput type = "text" placeholder = "username" onChange = {(e) => updateValues(e)} value = {username}/>
            <SignUpLogInTextInput type = "password" placeholder = "password" onChange = {(e) => updateValues(e)} value = {password}/>
            <SignUpLogInTextInput type = "password" placeholder = "confirm password" onChange = {(e) => updateValues(e)} value = {confirmPassword}/>
          </div>
          <p>have an account?  <Link to = "/login">Log In</Link></p>
          <BasicButton
            text = "Sign In"
            onClick = {SignUserIn}
          />
        </form>
      </div>
    </main>
  )
}

export default Signup