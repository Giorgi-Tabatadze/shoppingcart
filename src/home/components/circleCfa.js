/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function CircleCfa(props) {
  const { img, heading, text, alt } = props;
  const cfa = (
    <div className="circle-cfa">
      <img src={img} alt={alt} />
      <div className="circle-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
  return cfa;
}

export default CircleCfa;
