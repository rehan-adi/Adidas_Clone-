import React, { useState } from "react";
import Navbar from "./componrnt/Navbar";
import Main from "./componrnt/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./componrnt/LoginPage";
import Shoes from "./componrnt/Shoes";
import Men from "./componrnt/Men";
import { Provider } from "react-redux";
import Store from "./componrnt/store/Store";
import CartItem from "./componrnt/CartItem";
import Sports from "./componrnt/Sports";

function App() {
  return (
    <>
    <Provider store={Store}>
    <Router >
  <Navbar />
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/shoes" element={<Shoes />} />
    <Route path="/Men" element={<Men />} />  
    <Route path="/sports" element={< Sports />} />  
    <Route path="/CartI" element={<CartItem />} />  
    <Route path="/LoginPage" element={<LoginPage />} />  
  </Routes>
  </Router>
    </Provider>
 
    </>
  )
}
export default App;