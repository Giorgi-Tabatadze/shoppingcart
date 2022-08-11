/* eslint-disable react/prop-types */
import React from "react";
import "./shop.css";
import ProductCard from "./components/productCard";

function ShopPage(props) {
  const { books } = props;
  return (
    <div className="products">
      {books.map((book) => {
        return <ProductCard key={book.id} product={book} />;
      })}
    </div>
  );
}

export default ShopPage;
