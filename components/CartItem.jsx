import React from "react";

function CardItem(props) {
  return (
    <div className="cartItem">
      <div className="cartItemProps">
        <p>{props.item.title}</p>
        <p>&#36;{props.item.price}</p>
        <p>
          QTY: <span>{props.item.qty}</span>
        </p>
        <button
          className="plus"
          onClick={() => props.onAdd(props.item)}
        >
          <i class="fas fa-plus"></i>
        </button>
        <button
          className="minus"
          onClick={() => props.onRemove(props.item)}
        >
          <i class="fas fa-minus"></i>
        </button>
      </div>
      <div>
        <img src={props.item.image} alt="imageOfToy" />
      </div>
    </div>
  );
}

export default CardItem;
