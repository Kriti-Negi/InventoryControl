import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Logo from '../components/Logo';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import BasicButton from '../components/BasicButton';
import SignUpLogInTextInput from '../components/SignUpLogInTextInput';
import { auth } from '../components/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCreated, setUserCreated] = useState(false);

  async function handleSignUp() {
    // if (password !== confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   setUserCreated(true);
    // } catch (error) {
    //   console.log(error);
    //   alert('Go to Login');
    // }
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

        {userCreated ? (
          <div>
            <p>User created successfully.</p>
            <Link to="/login" className="text-blue-500">
              Go to Login
            </Link>
          </div>
        ) : (
          <form className="mt-6">
            <div className="space-y-4">
              <SignUpLogInTextInput
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <SignUpLogInTextInput
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <SignUpLogInTextInput
                type="password"
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
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
              <Link to="/login">
                {/* <BasicButton
                  text="Sign Up"
                  bgColor="17B978"
                  onClick={handleSignUp()}
                  textColor="white"
                /> */}
              Sign up
              </Link>
            </motion.div>
          </form>
        )}
      </div>
    </main>
  );
};

export default Signup;
