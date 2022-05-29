import './App.css';
import React  from 'react';
import Home from "./components/Home"
import Cards from "./components/Cards"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";





function App() {

  const [country, setCountry] = useState([]);
  // const [loading, setLoading] = useState(false);


  // //  general api url
  //  const api = "https://restcountries.com/v3.1/all";
    
  
  // useEffect(()=>{
  //   const fetcher = async()=>{
  //     try {
  //       const res = await fetch(api)
  //       const jsoner = await res.json()
  //       setCountry(jsoner)
  //       console.log(jsoner)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetcher()
  // },[])



  return (
    
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:r" element={<Cards country={country} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
