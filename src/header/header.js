/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import shoppingbag from "./shoppingbag.svg";
import DropdownCart from "./components/dropdowncart";

function Header(props) {
  const [dropDownVisible, setDropdownVisible] = useState(false);

  const { books, cart } = props;
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

  const showDropdown = () => {
    setDropdownVisible(true);
  };
  const hideDropdown = () => {
    setDropdownVisible(false);
  };
  const navigate = useNavigate();

  const dropdown = dropDownVisible ? (
    <div
      onMouseOver={showDropdown}
      onFocus={showDropdown}
      onMouseOut={hideDropdown}
      onBlur={hideDropdown}
      className={`dropdown-list ${dropDownVisible ? "visible" : ""}`}
    >
      <DropdownCart booksInCart={booksInCart} orderTotal={orderTotal} />
      <Link to="/cart">
        <button type="button"> Checkout </button>
      </Link>
    </div>
  ) : (
    <div
      onMouseOut={hideDropdown}
      onBlur={hideDropdown}
      className={`dropdown-list ${dropDownVisible ? "visible" : ""}`}
    >
      <DropdownCart booksInCart={booksInCart} orderTotal={orderTotal} />
      <Link to="/cart">
        <button type="button"> Checkout </button>
      </Link>
    </div>
  );

  return (
    <div className="links">
      <nav>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Link to="/shop">
          <button type="button"> Shop </button>
        </Link>
      </nav>

      <div className="header-dropdown">
        <div
          className="shopping-overlay"
          onMouseOut={hideDropdown}
          onBlur={hideDropdown}
        >
          <div
            className="shopping-bag"
            onMouseOver={showDropdown}
            onFocus={showDropdown}
          >
            <img src={shoppingbag} alt="shopping bag" />
            <span>{cart.length}</span>
          </div>
        </div>
        {dropdown}
      </div>
    </div>
  );
}

export default Header;
