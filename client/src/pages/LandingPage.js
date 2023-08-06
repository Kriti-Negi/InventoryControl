import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import BasicButton from '../components/BasicButton';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-E3EEFF">
      <nav className="w-full py-4 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
          <Logo />
          <h3 className="text-xl font-semibold">Inventory Controls</h3>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />

            <Heading text="Inventory Control" textColor="071A52" />
            <SubHeading
              text="Take charge of your business. One order at a time."
              textColor="086972"
            />

            <Link to="/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <BasicButton text="Get Started" bgColor="17B978" textColor="white" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;