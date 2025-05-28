import { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Profile() {
  const email = localStorage.getItem('userEmail');
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!email) return;

    axios
      .get(`http://localhost:5000/api/profile?email=${email}`)
      .then((res) => {
        setUser(res.data.user);
        setFormData(res.data.user);
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to load profile');
      });
  }, [email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setUser(formData);
    setIsEditing(false);
    // Optional: send update to backend
  };

  const cancelEdit = () => {
    setFormData(user);
    setIsEditing(false);
  };

  if (!user) {
    return <div className="p-6 text-center text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-2xl">
      <div className="flex items-center space-x-6">
        <img
          className="w-24 h-24 rounded-full shadow-md object-cover ring-4 ring-indigo-500"
          src={user.avatar || 'https://i.pravatar.cc/100?img=3'}
          alt="User Avatar"
        />
        <div>
          {!isEditing ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </>
          ) : (
            <>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-xl font-bold text-gray-800 border-b-2 focus:outline-none focus:border-indigo-500"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-gray-600 border-b border-gray-300 mt-1 focus:outline-none focus:border-indigo-500"
              />
            </>
          )}
        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="ml-auto p-2 rounded-full bg-indigo-100 hover:bg-indigo-200"
          >
            <PencilIcon className="h-5 w-5 text-indigo-600" />
          </button>
        ) : (
          <div className="ml-auto flex gap-2">
            <button
              onClick={saveChanges}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200"
            >
              <CheckIcon className="h-5 w-5 text-green-600" />
            </button>
            <button
              onClick={cancelEdit}
              className="p-2 rounded-full bg-red-100 hover:bg-red-200"
            >
              <XMarkIcon className="h-5 w-5 text-red-600" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {['phone', 'location'].map((field) => (
          <div key={field}>
            <label className="block text-sm text-gray-600 capitalize mb-1">
              {field}
            </label>
            <input
              name={field}
              type="text"
              value={formData[field] || ''}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`w-full p-2 rounded-md border ${
                isEditing
                  ? 'border-indigo-300 focus:ring-2 focus:ring-indigo-500'
                  : 'border-gray-300'
              } focus:outline-none`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
