/* eslint-disable react/prop-types */
import React from "react";
import "./cart.css";

function CartPage(props) {
  const { books, cart, incrementDecrementCart, deleteFromCart } = props;
  const booksInCart = books.filter((book) => {
    return cart.some((product) => product.id === book.id);
  });
  booksInCart.forEach((book) => {
    cart.forEach((product) => {
      if (product.id === book.id) {
        // eslint-disable-next-line no-param-reassign
        book.amount = product.amount;
      }
    });
  });
  const orderTotal = booksInCart.reduce((accumulator, book) => {
    return accumulator + book.price * book.amount;
  }, 0);

  const increment = (event) => {
    const id = Number(event.target.dataset.id);
    const newAmount = 1;
    incrementDecrementCart(id, newAmount);
  };
  const decrement = (event) => {
    const id = Number(event.target.dataset.id);
    const newAmount = -1;
    incrementDecrementCart(id, newAmount);
  };
  const remove = (event) => {
    const id = Number(event.target.dataset.id);
    deleteFromCart(id);
  };

  // const handleChange = (event) => {
  //   if (event.target.value === "") {
  //     return;
  //   }
  //   const id = Number(event.target.dataset.id);
  //   const newAmount = Number(event.target.value);
  //   // eslint-disable-next-line no-restricted-globals
  //   if (isNaN(newAmount)) {
  //     return;
  //   }
  //   changeCart(id, newAmount);
  // };

  return (
    <div className="checkout">
      <div className="cart">
        <div className="cart-headers">
          <p className="cart-header-product">Product</p>
          <p className="cart-header-price">Price</p>
          <p className="cart-header-quantity">Quantity</p>
        </div>
        <div className="cart-products">
          {booksInCart.map((book) => {
            // eslint-disable-next-line no-param-reassign
            book.title =
              book.title.length > 36
                ? `${book.title.substring(0, 36)}...`
                : book.title;
            return (
              <div className="cart-unit" key={book.id}>
                <div className="cart-product">
                  <img className="cart-image" src={book.img} alt="Book Title" />
                  <div>
                    <p className="cart-title">{book.title}</p>
                    <p className="cart-author">{book.author}</p>
                  </div>
                </div>
                <div className="cart-price">{book.price}</div>
                <div className="cart-quantity">
                  <button
                    data-id={book.id}
                    className="crement"
                    type="button"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    id="details-amount"
                    data-id={book.id}
                    type="tel"
                    value={book.amount}
                    readOnly
                  />
                  <button
                    data-id={book.id}
                    type="button"
                    className="crement"
                    onClick={increment}
                  >
                    +
                  </button>
                  <button
                    data-id={book.id}
                    type="button"
                    className="cart-remove"
                    onClick={remove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total">
        <h2>
          Total: <span>{orderTotal} USD</span>
        </h2>
      </div>
      <button type="button">Checkout</button>
    </div>
  );
}

export default CartPage;
