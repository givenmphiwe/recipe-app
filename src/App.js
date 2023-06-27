import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import Burger from "./components/Burger";
import Contact from "./components/Contact";
import { PropagateLoader } from "react-spinners";
import Steak from "./components/Steak";
import Pizza from "./components/Pizza";
import Turkey from "./components/Turkey";

function App() {

  const[loading, setLoading] = useState(false)
  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading}  size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        <Burger/>
        <Steak initialCount={0}/>
        <Pizza/>
        <Turkey/>
        <Contact/>
        
        </>
      }
    </div>
  );
}

export default App;
