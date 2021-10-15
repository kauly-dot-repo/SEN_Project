import { Link } from 'react-router-dom';
import classes from './ResearchBox.module.css'

function ResearchBox(props) {
  return (
    <div >
      <h2 className={classes.text}>your research outputs</h2>
      <div className={classes.wrapper}>
        {props.children} {/* //children is the content between open and closing tag */}
      </div>

      <div>
          <Link to='/new-output' className={classes.link}>
            New Output
          </Link>
          <Link to={props.link} className={classes.link}>
            {props.label}
          </Link>
      </div>

    </div>
  );

}

export default ResearchBox;