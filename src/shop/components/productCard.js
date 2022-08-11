/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { getByTitle } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  // eslint-disable-next-line react/destructuring-assignment
  let { img, title, author, price, id } = props.product;
  title = title.length > 36 ? `${title.substring(0, 36)}...` : title;
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="product-card"
      onClick={() => {
        navigate(`/shop/view/${id}`);
      }}
    >
      <img src={img} alt="book cover" />
      <div className="card-header">
        <p className="card-title">{title}</p>
        <p className="card-author">{author}</p>
        <p className="card-price">{`${price} USD`}</p>
      </div>
    </div>
  );
}

export default ProductCard;
