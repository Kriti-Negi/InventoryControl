import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Orders() {
  const initialOrders = [
    {
      id: 1,
      ordererName: 'Sam',
      itemOrdered: 'Smile Sticker',
      itemCost: '$2',
      dateOrdered: '08/07/23',
      notes: 'Late order',
    },
    {
      id: 2,
      ordererName: 'Sam',
      itemOrdered: 'Smile Sticker',
      itemCost: '$2',
      dateOrdered: '08/07/23',
      notes: 'Late order',
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [ordererName, setOrdererName] = useState('');
  const [itemOrdered, setItemOrdered] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddOrder = () => {
    if (ordererName && itemOrdered && itemCost) {
      const newOrder = {
        id: orders.length + 1,
        ordererName,
        itemOrdered,
        itemCost,
        dateOrdered: new Date().toLocaleDateString(),
        notes,
      };
      setOrders([...orders, newOrder]);
      setOrdererName('');
      setItemOrdered('');
      setItemCost('');
      setNotes('');
    }
  };

  const handleCompleteOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, completed: true } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <Navbar />
      <main className="px-10 py-6">
        <div className="bg-white border border-black p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-3">Pending Orders</h2>
          <div className="grid grid-cols-6 gap-2 text-center font-semibold">
            <div>Id Number</div>
            <div>Orderer Name</div>
            <div>Item Ordered</div>
            <div>Item Cost</div>
            <div>Date Ordered</div>
            <div>Notes</div>
            <div>Action</div>
          </div>
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-6 gap-2 text-center mt-2"
            >
              <div>{order.id}</div>
              <div>{order.ordererName}</div>
              <div>{order.itemOrdered}</div>
              <div>{order.itemCost}</div>
              <div>{order.dateOrdered}</div>
              <div>{order.notes}</div>
              <div>
                {!order.completed && (
                  <>
                    <button
                      onClick={() => handleCompleteOrder(order.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md"
                    >
                      Complete Order
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md ml-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-black p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Add Order</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Orderer Name"
              value={ordererName}
              onChange={(e) => setOrdererName(e.target.value)}
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Item Ordered"
              value={itemOrdered}
              onChange={(e) => setItemOrdered(e.target.value)}
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Item Cost"
              value={itemCost}
              onChange={(e) => setItemCost(e.target.value)}
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border p-2 rounded-lg col-span-2"
            />
            <button
              onClick={handleAddOrder}
              className="col-span-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Add Order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;
