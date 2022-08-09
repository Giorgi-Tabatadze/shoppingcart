/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function HomeCfa(props) {
  const { heading, text, buttonText, onButtonClick } = props;
  const cfa = (
    <div className="home-cfa">
      <div className="home-text">
        <h1>{heading}</h1>
        <h2>{text}</h2>
        <button type="button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
  return cfa;
}

export default HomeCfa;
