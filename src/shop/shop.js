/* eslint-disable react/prop-types */
import React from "react";
import "./shop.css";
import ProductCard from "./components/productCard";

function ShopPage(props) {
  const { books, addToCart } = props;
  return (
    <div className="shop">
      <h1>Shop Page</h1>
      <div className="products">
        {books.map((book) => {
          return (
            <ProductCard key={book.id} product={book} addToCart={addToCart} />
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
