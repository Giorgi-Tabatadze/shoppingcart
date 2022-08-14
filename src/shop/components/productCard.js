/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { getByTitle } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPopup from "./cardpopup";

function ProductCard(props) {
  const [popupVisible, setPopupVisible] = useState(false);

  // eslint-disable-next-line react/destructuring-assignment
  const { product, addToCart } = props;
  let { img, title, author, price, id } = product;
  title = title.length > 36 ? `${title.substring(0, 36)}...` : title;
  const navigate = useNavigate();
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  const productCart = popupVisible ? (
    <div
      className="product-card"
      onClick={() => {
        navigate(`/shop/view/${id}`);
      }}
      onMouseOver={openPopup}
      onMouseOut={closePopup}
    >
      <CardPopup
        title={title}
        author={author}
        price={price}
        id={id}
        addToCart={addToCart}
      />
      <img src={img} alt="book cover" />
    </div>
  ) : (
    <div
      className="product-card"
      onClick={() => {
        navigate(`/shop/view/${id}`);
      }}
      onMouseOver={openPopup}
      onMouseOut={closePopup}
    >
      <img src={img} alt="book cover" />
      <div className="card-header">
        <p className="card-title">{title}</p>
        <p className="card-author">{author}</p>
        <p className="card-price">{`${price} USD`}</p>
      </div>
    </div>
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div>{productCart}</div>
  );
}

export default ProductCard;
