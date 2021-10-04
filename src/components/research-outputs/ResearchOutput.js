import classes from './ResearchOutput.module.css';
import Card from '../layout/Card'

function ResearchOutput(props) {

  return (
    <li className={classes.item}> {/* //should be a list item because it will be added 
    to the Research output list component which */}
      <div>
        <Card>
          <div className={classes.content}>
            <h4>{props.title}</h4>{/* Should later Link to output  */}
            <p>{props.subtitle}</p>
            <p>{props.datePublished}</p>
          </div>
          <div className={classes.actions}>
            <div>
              <button className={classes.btn}>Download</button>
              <button className={classes.btn}>Edit</button>
            </div>
          </div>
        </Card>
      </div>
    </li>


  );

}

export default ResearchOutput;