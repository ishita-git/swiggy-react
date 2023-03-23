import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from './components/Carousel/Carousel';
import SignIn from './Pages/SignIn/SignIn';
import { useState } from 'react';
import Home from './Pages/Home/Home';

import Search from './Pages/Search/Search';
import Main from './Pages/Main/Main';
import Restaurant from './components/Restaurant/Restaurant';
import Checkout from './Pages/Checkout/Checkout';

function App() {

  

 
  const[menus , setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice , setTotalPrice] = useState([])


  const addMenu = (menuArray) =>{ //usecallback
    
       setMenus([ ...menus,menuArray])
       console.log(menus)
  }

  

  const addToCart = (item,price) => {
   
    let newPrice = price
  
    setTotalPrice((price)=>eval(price)+ eval(newPrice))
    
    console.log(totalPrice)
   
    let newCart = cart;
    if(item in newCart) {
      newCart[item] = [newCart[item.id][0], newCart[item.id][1]+1];
    }
    else {
      newCart[item] = [item, 1];
    }
    setCart(newCart);
   
    console.log(cart)
  }

 

  return (
    
   <Router>
       <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="header" element={<Header/>}/>
        <Route exact path="image/:id" element={<Restaurant cartItems={cart} addToCart={addToCart} addMenu={addMenu}/>}/>
        <Route exact path="carousel" element={<Carousel/>}/>
        <Route exact path="home" element={<Home />}/>
        <Route exact path="signin" element={<SignIn />}/>
        <Route exact path="search" element={<Search/>}/>
        <Route exact path="image/:id/checkout" element={<Checkout  totalPrice={totalPrice} addMenu={menus}cartItems={cart} addToCart={addToCart}/>}/>
        </Routes>
        </Router>
       
       
   
       
      
  );
}

export default App;
