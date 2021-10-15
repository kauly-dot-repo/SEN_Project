import classes from './Bio.module.css';

function Bio(props) {
  return (
    <div className={classes.wrapper}>
      <div>
        <h5 className={classes.headings}>{props.firstname} {props.surname}</h5>
        <h5 className={classes.headings}>{props.user_type}</h5>
        <h5 className={classes.headings}>{props.department}</h5>
      </div>
      <textarea rows='5' className={classes.bioText}>
        This is the bio of the person that owns this account
      </textarea>
    </div>
  );
}

export default Bio;