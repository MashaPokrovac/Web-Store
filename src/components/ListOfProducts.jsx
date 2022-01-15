import React from "react";
import products from "./products";
import ProductCard from "./ProductCard";

function ListOfProducts(props) {
  function onAdd(product) {
    props.onAdd(product);
  }

  function displayProducts(product) {
    if (
      product.title
        .toLowerCase()
        .indexOf(props.searchTerm.toLowerCase()) !== -1
    ) {
      return (
        <ProductCard
          product={product}
          key={product.id}
          onAdd={onAdd}
        />
      );
    }
  }

  return (
    <div className="listOfProducts">
      {products.map(displayProducts)}
    </div>
  );
}

export default ListOfProducts;
