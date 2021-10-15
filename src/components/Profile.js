
import classes from "./Profile.module.css";
import Bio from "./Bio";


function Profile() {
  return (
    <div className={classes.profile}>

      <div className={classes.image}>
        <img src="" alt="" />
      </div>
      <h4 className={classes.aboutText}>About Me</h4>
      <div>
        <Bio />
      </div>
      <div className={classes.actions}>
        <button>Edit Profile</button>
      </div>

    </div>
  );
}

export default Profile;