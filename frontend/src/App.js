import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import "./App.css";
import Footer from './Components/Footer';
import Navbar2 from './Components/Navbar2';
import Productdisplay from './Components/homecomponents/Productdisplay';

function App() {
  const [searching, setSearching] = useState(false);

  // const handleSearch = () => {
  //   setSearching(true);
  // };

  return (
    <Router>
      <div className="App">
      {/* <Navbar onSearch={handleSearch}  /> */}
      <Navbar />
      <Navbar2/>
        <Routes> 
          <Route
            path="/"
            element={ <Home />}
          />
          <Route path="/about" element={<h1>This is the about page</h1>} />
          <Route path="/contact" element={<h1>This is the contact page</h1>} />
          <Route path="/profile" element={<h1>This is the profile page</h1>} />
          <Route path="/login" element={<h1>This is the login page</h1>} />
          <Route path="/orders" element={<h1>arriving ordersd</h1>} />
          <Route path="/ordered" element={<h1>Previce orders</h1>} />
          <Route path="/supplier" element={<h1>conditions and terms</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="/menswear" element={<h1>this is for mens wear</h1>} />
          <Route path="/womenswear" element={<h1>this is for wopmenswear</h1>} />
          <Route path="/kids" element={<h1>this is for kids</h1>} />
          <Route path="/homekitchen" element={<h1>homekithchen</h1>} />
          <Route path="/health" element={<h1> this is for health</h1>} />
          <Route path="/footwear" element={<h1>this is for footwear</h1>} />
          <Route path="/accessories" element={<h1>this is for accessories</h1>} />
          <Route path="/electronics" element={<h1> this is for electronics</h1>} />
          <Route path="/books" element={<h1> this is for books</h1>} />
          <Route path="/productdisplay" element={<Productdisplay />} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
