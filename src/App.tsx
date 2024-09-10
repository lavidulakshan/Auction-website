import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CustomerRegistration from './Customer/CustomerRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/AuctionHomepage'; 
import SignIn from './Components/SignIn';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Selling from './pages/Selling';
import Services from './pages/Services';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/customerregistration" element={<CustomerRegistration />} /> 
        <Route path="/sigin" element={<SignIn />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/services" element={<Services />} />
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
