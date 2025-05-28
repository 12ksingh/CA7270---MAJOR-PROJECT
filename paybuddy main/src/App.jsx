import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav';
import Login from './Components/Login';
import Dashboard from './Sendmoney';
import Team from './Addmoney';
import ProtectedRoute from './Components/ProtectedRoute';
import TravelBooking from './Components/Travel';
import MainMenu from './Components/Mainmenu';
import Profile from './Components/Profile';
import Signup from './Components/Signup'
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/travel" element={<ProtectedRoute><TravelBooking/></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><MainMenu /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/Sendmoney" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/addmoney" element={<ProtectedRoute><Team /></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
