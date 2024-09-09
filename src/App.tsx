import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CustomerRegistration from './Customer/CustomerRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Homepage from './pages/HomePage';
import HomePage from './pages/AuctionHomepage'; 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} /> {/* Home page route */}
        <Route path="/customerregistration" element={<CustomerRegistration />} /> {/* Updated path */}
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// const HomePage = () => (
//   <div>
//     <h1>Welcome to the Home Page</h1>
//     {/* Add content or components for the home page */}
//   </div>
// );

export default App;
