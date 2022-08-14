/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useNavigate } from "react-router-dom";

function DropdownCart(props) {
  const { booksInCart, orderTotal } = props;
  const navigate = useNavigate();

  const dropdownCart = (
    <div className="dropdown-cart">
      <div className="drowpdown-products">
        {booksInCart.map((book) => {
          // eslint-disable-next-line no-param-reassign
          book.title =
            book.title.length > 36
              ? `${book.title.substring(0, 36)}...`
              : book.title;
          return (
            <div className="dropdown-unit" key={book.id}>
              <div className="dropdown-product">
                <img
                  className="dropdown-image"
                  src={book.img}
                  alt="Book Title"
                />

                <div className="dropdown-text">
                  <p
                    onClick={() => {
                      console.log("going to book");
                      navigate(`/shop/view/${book.id}`);
                    }}
                    className="dropdown-title"
                  >
                    {book.title}
                  </p>
                  <div className="dropdown-numbers">
                    <div className="dropdown-quantity">{book.amount}x</div>
                    <div className="dropdown-price">{book.price} USD</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <p>
          Subtotal: <span>{orderTotal} USD</span>
        </p>
      </div>
    </div>
  );
  return dropdownCart;
}

export default DropdownCart;
