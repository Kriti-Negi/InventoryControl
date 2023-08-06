import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  const transactions = [
    { date: '2023-08-10', description: 'Spent $100 on material A' },
    { date: '2023-08-09', description: 'Spent $50 on material B' },
    { date: '2023-08-09', description: 'Order Placed by [Sam] for 1 sticker' },
    { date: '2023-08-09', description: 'Got 20 sheets sticker paper' },
  ];

  const pendingOrders = [
    { id: 1, product: 'Sam orderd stickers', quantity: 5 },
    { id: 2, product: 'Ellie ordered stickers', quantity: 10 },
  ];

  return (
    <div>
      <Navbar />
      <main className="px-10 py-6">
        <div className="flex space-x-8">
          {/* Pending Orders */}
          <div className="w-1/2 bg-white border border-black p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Pending Orders</h2>
            <ul className="space-y-2">
              {pendingOrders.map((order) => (
                <li key={order.id} className="text-gray-600 flex items-center">
                  <span className="text-green-600 mr-2">
                    {order.product} - {order.quantity} pcs{' '}
                  </span>
                  <Link to={`/orders/${order.id}`} className="text-blue-500 ml-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md">
                      View Order
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/create-order" className="text-blue-500">
                <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md">
                  Create New Order
                </button>
              </Link>
            </div>
          </div>

          {/* Latest Transactions */}
          <div className="w-1/2 bg-white border border-black p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Latest Transactions</h2>
            <ul className="space-y-2">
              {transactions.map((transaction, index) => (
                <li key={index} className="text-gray-600">
                  <span className="text-gray-400">{transaction.date}</span> - {transaction.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
