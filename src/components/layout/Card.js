import classes from './Card.module.css'

function Card(props) {
  return <div className={classes.card}>
    {props.children} {/* //children is the content between open and closing tag */}
  </div>
}

export default Card;
