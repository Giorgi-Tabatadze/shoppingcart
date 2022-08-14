/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { getByTitle } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function CardPopup(props) {
  // eslint-disable-next-line react/destructuring-assignment
  let { title, author, price, id, addToCart } = props;
  title = title.length > 36 ? `${title.substring(0, 36)}...` : title;
  const navigate = useNavigate();

  const sendToCart = (e) => {
    e.stopPropagation();
    addToCart(id, 1);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="popup-card"
      onClick={() => {
        navigate(`/shop/view/${id}`);
      }}
    >
      <p className="popup-price">{`${price} USD`}</p>

      <div className="popup-header">
        <p className="popup-title">{title}</p>
        <p className="popup-author">{author}</p>
      </div>
      <button type="button" onClick={sendToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default CardPopup;
