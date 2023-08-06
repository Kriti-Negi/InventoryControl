import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function Inventory() {
  const initialInventory = [
    { id: 1, itemName: 'Coal Sticker', itemAmount: 9, itemCost: '$2', itemNotes: '' },
    { id: 2, itemName: 'Smile Sticker', itemAmount: 3, itemCost: '$2', itemNotes: '' },
  ];

  const [inventoryItems, setInventoryItems] = useState(initialInventory);
  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [itemNotes, setItemNotes] = useState('');

  const handleAddItem = () => {
    if (itemName && itemCost && itemAmount) {
      const newItem = {
        id: inventoryItems.length + 1,
        itemName,
        itemCost,
        itemAmount,
        itemNotes,
      };
      setInventoryItems([...inventoryItems, newItem]);
      setItemName('');
      setItemCost('');
      setItemAmount('');
      setItemNotes('');
    }
  };

  const handleDeleteItem = (id) => {
    const updatedItems = inventoryItems.filter((item) => item.id !== id);
    setInventoryItems(updatedItems);
  };

  return (
    <div>
      <Navbar />
      <main className="px-10 py-6">
        <div className="bg-white border border-black p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-3">Inventory</h2>
          <div className="grid grid-cols-6 gap-2 text-center font-semibold">
            <div>Id Number</div>
            <div>Item</div>
            <div>Amount</div>
            <div>Item Cost</div>
            <div>Notes</div>
            <div>Action</div>
          </div>
          {inventoryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-6 gap-2 text-center mt-2"
            >
              <div>{item.id}</div>
              <div>{item.itemName}</div>
              <div>{item.itemAmount}</div>
              <div>{item.itemCost}</div>
              <div>{item.itemNotes}</div>
              <div>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-white border border-black p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Add Item to Inventory</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
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
              placeholder="Item Amount"
              value={itemAmount}
              onChange={(e) => setItemAmount(e.target.value)}
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Notes"
              value={itemNotes}
              onChange={(e) => setItemNotes(e.target.value)}
              className="border p-2 rounded-lg col-span-2"
            />
            <button
              onClick={handleAddItem}
              className="col-span-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Add Item
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
