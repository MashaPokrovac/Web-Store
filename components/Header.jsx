import React, { useState } from "react";
import Cart from "./Cart";

function Header(props) {
  // const [isFilledSearch, setFilledSearch] = useState(false);
  const [item, setItem] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    // setFilledSearch(true);
    const value = event.target.value;
    setItem(value);
  }

  // function clearSearch() {
  //   setItem("");
  //   setFilledSearch(false);
  // }

  function displayShopCart() {
    setIsClicked(!isClicked);
  }

  return (
    <header>
      <h1>Iskra's Toys</h1>
      <div className="wrapper">
        <div className="search-wrapper">
          {
            <span className="search-icon" onClick={() => props.passSearch(item)} >
              <i className="fas fa-search"></i>
            </span>
          }
          <input
            className="search"
            type="text"
            name="search"
            aria-label="Search through site content"
            placeholder="Search"
            value={item}
            onChange={handleChange}
          ></input>

        </div>
        <div className="shop-cart-wrapper">
          <button className="cart-button" ><i className
          ="fas fa-shopping-cart " onClick={displayShopCart}></i></button> 
          <span >{props.cartItemCounter}</span>
          <Cart isClicked={isClicked} cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove} />
        </div>
      </div>
     
    </header>
  );
}

export default Header;
