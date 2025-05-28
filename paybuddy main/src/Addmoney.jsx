import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Addmoney() {
  const [wallet, setWallet] = useState(500); // Initial wallet balance
  const [amount, setAmount] = useState('');
  const [bank, setBank] = useState('');

  const banks = [
    'HDFC Bank',
    'SBI Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra',
    'Punjab National Bank',
    'Bank of Baroda',
  ];

  const handleAddMoney = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);

    if (!amt || amt <= 0) {
      alert('Enter a valid amount');
      return;
    }

    if (!bank) {
      alert('Please select a bank');
      return;
    }

    setWallet(wallet + amt);
    alert(`$${amt.toFixed(2)} added to your wallet from ${bank}!`);
    setAmount('');
    setBank('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Team Wallet</h1>

      {/* Wallet Display */}
      <div className="mb-6 flex items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        <div className="rounded-full bg-green-100 p-3 text-green-700">
          <PlusIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Current Wallet Balance</p>
          <p className="text-xl font-semibold text-gray-800">${wallet.toFixed(2)}</p>
        </div>
      </div>

      {/* Add Money Form */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Add Money</h2>
        <form onSubmit={handleAddMoney} className="grid gap-4 sm:grid-cols-3">
          {/* Amount input */}
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          />

          {/* Bank selector */}
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="rounded border border-gray-300 p-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          >
            <option value="">Select Bank</option>
            {banks.map((bankName) => (
              <option key={bankName} value={bankName}>
                {bankName}
              </option>
            ))}
          </select>

          {/* Submit button */}
          <button
            type="submit"
            className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Add Money
          </button>
        </form>
      </div>
    </div>
  );
}
