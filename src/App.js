/* eslint-disable no-param-reassign */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import "normalize.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./home/home";
import ShopPage from "./shop/shop";
import booksToSell from "./shop/booksToSell/books";
import ProductDetails from "./shop/components/productDetails";
import CartPage from "./cart/cart";
import Header from "./header/header";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, amount) => {
    const productToAdd = {};
    productToAdd.id = Number(id);
    productToAdd.amount = Number(amount);
    const newCart = [...cart];
    const productAlreadyAdded = newCart.findIndex((product) => {
      return product.id === productToAdd.id;
    });
    if (productAlreadyAdded === -1) {
      setCart([...newCart, productToAdd]);
    } else {
      newCart[productAlreadyAdded].amount += productToAdd.amount;
      setCart([...newCart]);
    }
  };
  const deleteFromCart = (id) => {
    setCart(
      cart.filter((product) => {
        return product.id !== Number(id);
      }),
    );
  };
  const incrementDecrementCart = (id, changeAmountBy) => {
    const newCart = [...cart];
    id = Number(id);
    changeAmountBy = Number(changeAmountBy);

    const productId = newCart.findIndex((product) => {
      return product.id === id;
    });
    newCart[productId].amount += changeAmountBy;
    if (newCart[productId].amount <= 0) {
      deleteFromCart(id);
    } else {
      setCart([...newCart]);
    }
  };
  const changeCart = (id, newAmount) => {
    const newCart = [...cart];
    id = Number(id);
    newAmount = Number(newAmount);

    const productId = newCart.findIndex((product) => {
      return product.id === id;
    });
    newCart[productId].amount = newAmount;
    if (newCart[productId].amount < 0) {
      console.log("amount should not change");
    } else if (newCart[productId].amount === 0) {
      deleteFromCart(id);
    } else {
      setCart([...newCart]);
    }
  };

  useEffect(() => {
    console.log(cart);
  });

  return (
    <BrowserRouter>
      <Header books={booksToSell} cart={cart} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={<ShopPage books={booksToSell} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              books={booksToSell}
              cart={cart}
              incrementDecrementCart={incrementDecrementCart}
              changeCart={changeCart}
              deleteFromCart={deleteFromCart}
            />
          }
        />

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
