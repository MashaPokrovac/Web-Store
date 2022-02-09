import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  function passSearch(item) {
    setSearchTerm(item);
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <div>
      <Header
        passSearch={passSearch}
        cartItemCounter={cartItems.length}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <Navbar />
      <Main searchTerm={searchTerm} onAdd={onAdd} />
    </div>
  );
}

export default App;
