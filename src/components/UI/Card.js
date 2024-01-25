import "./Card.css";

//------------------- Alternate Syntax for functions! ------------------------------
// const Card = (props) => {}

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
