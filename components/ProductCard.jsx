import React from "react";

function ProductCard(props) {
  return (
    <div className="product">
      <img src={props.product.image} alt="imageOfToy" />
      <h2>{props.product.title}</h2>
      <p>&#36;{props.product.price}</p>
      <button
        className="addItem"
        onClick={() => props.onAdd(props.product)}
      >
        Add
      </button>
    </div>
  );
}

export default ProductCard;
