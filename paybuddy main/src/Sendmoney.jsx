import { useState } from 'react';
import {
  CurrencyDollarIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [wallet, setWallet] = useState(1200);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [history, setHistory] = useState([
    { id: 1, name: 'Netflix', amount: 12.99, type: 'Debit', date: 'May 12, 2025' },
    { id: 2, name: 'Salary', amount: 2200, type: 'Credit', date: 'May 10, 2025' },
  ]);

  const handleTransfer = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!recipient || isNaN(amt) || amt <= 0 || amt > wallet) {
      alert('Invalid transfer');
      return;
    }

    setWallet(wallet - amt);
    setHistory([
      {
        id: history.length + 1,
        name: recipient,
        amount: amt,
        type: 'Debit',
        date: new Date().toLocaleDateString(),
      },
      ...history,
    ]);
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Payment Dashboard</h1>

      {/* Wallet */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-md flex items-center space-x-4">
        <div className="rounded-full bg-indigo-100 p-3 text-indigo-700">
          <CurrencyDollarIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Wallet Balance</p>
          <p className="text-xl font-semibold text-gray-800">${wallet.toFixed(2)}</p>
        </div>
      </div>

      {/* Transfer Money */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
          <ArrowRightIcon className="h-5 w-5" /> Transfer Money
        </h2>
        <form onSubmit={handleTransfer} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Recipient Name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="rounded border border-gray-300 p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded border border-gray-300 p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded p-2 hover:bg-indigo-700"
          >
            Send Money
          </button>
        </form>
      </div>

      {/* Transaction History */}
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
          <ClockIcon className="h-5 w-5" /> Transaction History
        </h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="border-b border-gray-200 text-sm text-gray-600">
              <th className="pb-2">Name</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((tx) => (
              <tr key={tx.id} className="text-sm text-gray-700">
                <td className="py-3">{tx.name}</td>
                <td>${tx.amount.toFixed(2)}</td>
                <td>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      tx.type === 'Credit'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td>{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
