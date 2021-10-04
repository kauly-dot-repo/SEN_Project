import classes from './ResearchBox.module.css'

function ResearchBox(props) {
  return (
    <div>
      <h2 className={classes.text}>your research outputs</h2>
      <div className={classes.wrapper}>
        {props.children} {/* //children is the content between open and closing tag */}
      </div>

      <div className={classes.actions}>
        <button className={classes.btn}>new output</button>
      </div>

    </div>
  );

}

export default ResearchBox;