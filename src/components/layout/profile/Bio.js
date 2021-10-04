import classes from './Bio.module.css';

function Bio(props) {
  return (
    <div className={classes.wrapper}>
      <div>
        <h5 className={classes.headings}>Title. Full Name</h5>
        <h5 className={classes.headings}>Position</h5>
        <h5 className={classes.headings}>Faculty | Department</h5>
      </div>
      <textarea rows='5' className={classes.bioText}>
        This is the bio of the person that owns this account
      </textarea>
    </div>
  );
}

export default Bio;
