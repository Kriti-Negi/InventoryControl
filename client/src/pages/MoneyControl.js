import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function MoneyControl() {
  const initialTransactions = [
    {
      id: 1,
      ordererName: 'Sam',
      moneyGained: '$2',
      gainedBy: 'Sam bought [Smile sticker]',
      dateObtained: '08/07/23',
      notes: 'Late order',
    },
    {
      id: 2,
      ordererName: 'Junie',
      moneyGained: '$2',
      gainedBy: 'Sam bought [Smile sticker]',
      dateObtained: '08/07/23',
      notes: 'Late order',
    },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);

  const totalRevenue = transactions.reduce(
    (total, transaction) =>
      total + parseFloat(transaction.moneyGained.slice(1)),
    0
  );

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <Navbar />
      <main className="px-10 py-6">
        <div className="bg-white border border-black p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-3">Money Controls</h2>
          <div className="grid grid-cols-6 gap-2 text-center font-semibold">
            <div>Id Number</div>
            <div>Orderer Name</div>
            <div>Money Gained</div>
            <div>Gained By</div>
            <div>Date Obtained</div>
            <div>Notes</div>
            <div>Action</div>
          </div>
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-6 gap-2 text-center mt-2"
            >
              <div>{transaction.id}</div>
              <div>{transaction.ordererName}</div>
              <div>{transaction.moneyGained}</div>
              <div>{transaction.gainedBy}</div>
              <div>{transaction.dateObtained}</div>
              <div>{transaction.notes}</div>
              <div>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-white border border-black p-4 rounded-lg shadow-md">
          <p className="font-semibold text-lg mb-2">Total Revenue: ${totalRevenue.toFixed(2)}</p>
        </div>
      </main>
    </div>
  );
}

export default MoneyControl;
