import React from "react";
import { Route, Routes } from 'react-router-dom';
import ListOfProducts from "./ListOfProducts";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import products from "./products";

function Main(props) {

  function onAdd(product) {
    props.onAdd(product);
  }

  return(
    <Routes>
       <Route exact path='/' element={<Home  slides={products}/>}></Route>
      <Route exact path='/shop' element={<ListOfProducts searchTerm={props.searchTerm} onAdd={onAdd} />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default Main;