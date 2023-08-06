import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';

import Logo from '../components/Logo';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import BasicButton from '../components/BasicButton';
import SignUpLogInTextInput from '../components/SignUpLogInTextInput';
import { auth } from '../components/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function logUserIn() {
    // window.location.href='/home';
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
          <Heading text="Log In." textColor="071A52" />
          <SubHeading text="Keep Calm. Keep it Going." textColor="086972" />
        </motion.div>

        <form className="mt-6">
          <div className="space-y-4">
            <div className="relative">
              <SignUpLogInTextInput
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaUser className="text-gray-400" />
              </span>
            </div>
            <div className="relative">
              <SignUpLogInTextInput
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaLock className="text-gray-400" />
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <Link to='/home'>
            <BasicButton
              text="Log In"
              onClick={logUserIn}
              bgColor="17B978"
              textColor="white"
            />
            </Link>
          </motion.div>
        </form>
      </div>
    </main>
  );
};

export default Login;
