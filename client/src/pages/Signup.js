import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Logo from '../components/Logo';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import BasicButton from '../components/BasicButton';
import SignUpLogInTextInput from '../components/SignUpLogInTextInput';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function updateValues(e) {
    const { placeholder, value } = e.target;
    if (placeholder === 'username') {
      setUsername(value);
    } else if (placeholder === 'password') {
      setPassword(value);
    } else if (placeholder === 'email') {
      setEmail(value);
    } else if (placeholder === 'confirm password') {
      setConfirmPassword(value);
    }
  }

  function SignUserIn() {
    console.log('*backend magic*');
  }

  return (
    <main className="flex h-screen items-center justify-center bg-E3EEFF">
      <div className="text-center w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Logo />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading text="Sign Up" textColor="071A52" />
          <SubHeading text="Take charge of your business." textColor="086972" />
        </motion.div>

        <form className="mt-6">
          <div className="space-y-4">
            <SignUpLogInTextInput
              type="text"
              placeholder="email"
              onChange={(e) => updateValues(e)}
              value={email}
            />
            <SignUpLogInTextInput
              type="text"
              placeholder="username"
              onChange={(e) => updateValues(e)}
              value={username}
            />
            <SignUpLogInTextInput
              type="password"
              placeholder="password"
              onChange={(e) => updateValues(e)}
              value={password}
            />
            <SignUpLogInTextInput
              type="password"
              placeholder="confirm password"
              onChange={(e) => updateValues(e)}
              value={confirmPassword}
            />          </div>
          <p className="mt-2 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500">
              Log In
            </Link>
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <BasicButton
              text="Sign Up"
              onClick={SignUserIn}
              bgColor="17B978"
              textColor="white"
            />
          </motion.div>
        </form>
      </div>
    </main>
  );
};

export default Signup;