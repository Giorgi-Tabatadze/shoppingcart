/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { getByTitle } from "@testing-library/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { products, addToCart } = props;
  const { productid } = useParams();
  const [amount, setAmount] = useState(1);
  const product = products.filter((book) => {
    // eslint-disable-next-line eqeqeq
    return book.id == productid;
  });

  let {
    id,
    img,
    title,
    author,
    publisher,
    publishDate,
    pagesAmount,
    category,
    isbn,
    language,
    format,
    synopsis,
    price,
  } = product[0];
  title = title.length > 36 ? `${title.substring(0, 36)}...` : title;

  const increment = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  const decrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const sendToCart = () => {
    addToCart(id, amount);
  };

  const bookDetails = (
    <div className="detailed-product">
      <div className="details">
        <img src={img} alt="book cover" />
        <div className="detailed-details">
          <div className="detailed-header">
            <p className="detailed-title">{title}</p>
            <p className="detailed-author">
              {author}
              <span>(Author)</span>
            </p>
          </div>
          <div className="detailed-text">
            <p>
              Publisher: <span>{publisher}</span>
            </p>
            <p>
              {pagesAmount} Page / <span>Published {publishDate}</span>
            </p>
            <p>
              Category:{" "}
              <span>
                {category.map((item, index) => {
                  if (index === 0) {
                    return item;
                  }
                  return ` , ${item}`;
                })}
              </span>
            </p>
            <p>
              ISBN: <span>{isbn}</span>
            </p>
            <p>
              Language: <span>{language}</span>
            </p>
            <p>
              Format: <span>{format}</span>
            </p>
          </div>
          <div className="detailed-order">
            <p className="detailed-price">{`${price} USD`}</p>
            <label htmlFor="details-amount">Amount: </label>
            <button className="crement" type="button" onClick={decrement}>
              -
            </button>
            <input id="details-amount" type="tel" value={amount} />
            <button type="button" className="crement" onClick={increment}>
              +
            </button>
            <button type="button" onClick={sendToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="synopsis">
        <h3>Synopsis: </h3>
        <p>{synopsis}</p>
      </div>
    </div>
  );

  return bookDetails;
}

export default ProductDetails;
