import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();
  if (phone.length < 10) {
    alert("Phone number must be at least 10 digits long");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    await axios.post('http://localhost:5000/api/signup', {
      name,
      email,
      password,
      phone,
    });

    alert('Account created! Please login.');
    navigate('/Login');
  } catch (err) {
    alert(err.response?.data?.message || 'Signup failed');
  }
};


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Create Account</h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full rounded-md border px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-purple-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 w-full rounded-md border px-4 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-600 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
