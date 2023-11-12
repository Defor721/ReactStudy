import classes from "./Card.module.css";

export default function Card(props) {
  let cardname = props.className + ` ${classes.card}`;
  return <div className={cardname}>{props.children}</div>;
}
