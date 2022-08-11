/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import "normalize.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./home/home";
import ShopPage from "./shop/shop";
import booksToSell from "./shop/booksToSell/books";
import ProductDetails from "./shop/components/productDetails";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, amount) => {
    const productToAdd = {};
    productToAdd.id = Number(id);
    productToAdd.amount = Number(amount);
    const newCart = [...cart];
    const productAlreadyAdded = cart.find((product) => {
      return product.id === productToAdd.id;
    });
    console.log(productAlreadyAdded);
    if (productAlreadyAdded != null) {
      newCart.productAlreadyAdded.amount += productToAdd.amount;
    } else {
      newCart.push(productToAdd);
    }

    setCart([newCart]);
  };
  const deleteFromCart = (id) => {
    setCart(
      cart.filter((product) => {
        return product.id !== Number(id);
      }),
    );
  };

  useEffect(() => {
    console.log(cart);
  });

  return (
    <BrowserRouter>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/shop">
        <button type="button"> Shop </button>
      </Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage books={booksToSell} />} />
        <Route
          path="/shop/view/:productid"
          element={
            <ProductDetails products={booksToSell} addToCart={addToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
