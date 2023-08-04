import React, {useState} from 'react'
import Logo from '../components/Logo'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import BasicButton from '../components/BasicButton'
import SignUpLogInTextInput from '../components/SignUpLogInTextInput'
import { Link } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateValues(e){
    if(e.target.placeholder === "email"){
      setEmail(e.target.value);
    }else if(e.target.placeholder === "password"){
      setPassword(e.target.value);
    }
  }

  function logUserIn(){
    console.log("*backend magic*")
  }

  return (
    <main>
      <div>
        <Logo/>
        <Heading text = "Log In."/>
        <SubHeading text = "Keep Calm. Keep it Going." />
      </div>
      <div>
        <form>
          <div>
            <SignUpLogInTextInput type = "text" placeholder = "email" onChange = {(e) => updateValues(e)} value = {email}/>
            <SignUpLogInTextInput type = "password" placeholder = "password" onChange = {(e) => updateValues(e)} value = {password}/>
          </div>
          <p>don't have an account? <Link to = "/signup">Sign Up</Link></p>
          <BasicButton
            text = "Log In"
            onClick = {logUserIn}
          />
        </form>
      </div>
    </main>
  )
}

export default Login