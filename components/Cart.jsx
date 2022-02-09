import React from "react";
import CartItem from "./CartItem";

function Cart(props) {

  const itemsPrice = props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="cart" style={{visibility: props.isClicked ? "visible" : "hidden"}} >

      <div>
        {props.cartItems.length === 0 && <div>Cart is empty</div>}
        {props.cartItems.length !== 0 && <div>SUBTOTAL: <span> ${itemsPrice}</span></div>}
        {props.cartItems.map((item) => (

          <CartItem item={item} key={item.id} onAdd={props.onAdd} onRemove={props.onRemove} />
        ))}

      </div>
    </div>
  )
}

export default Cart;
