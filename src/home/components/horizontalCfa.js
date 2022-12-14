/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";

function HorizontalCfa(props) {
  const { img, alt, heading, text, imgFirst, buttonText, onButtonClick } =
    props;

  const cfa = imgFirst ? (
    <div className="horizontal-cfa img-first">
      <img src={img} alt={alt} />
      <div className="horizontal-text">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button type="button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  ) : (
    <div className="horizontal-cfa img-second">
      <div className="horizontal-text">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button type="button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
      <img src={img} alt={alt} />
    </div>
  );
  return cfa;
}

export default HorizontalCfa;
