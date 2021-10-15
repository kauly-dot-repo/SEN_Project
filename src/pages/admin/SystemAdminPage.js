
// import axios from "axios";

import { Link } from 'react-router-dom';
import ResearchBox from "../../components/layout/ResearchBox";
import ResearchOutputList from "../../components/research/ResearchOutputList";

import Profile from "../../components/Profile";
import classes from './SystemAdminPage.module.css';

export default function SystemAdmin() {
  return (
    <div>
      <div>
        <h1>Welcome System Admin</h1>
      </div>
      <section>


        <aside className={classes.profile}>
          <Profile />
        </aside>

        <main className={classes.wrapper}>
          <ResearchBox link={'/report'} label={'New Report'}>
            <ResearchOutputList />
          </ResearchBox>
        </main>

        <aside className={classes.admin}>
          <div>
            <Link to='/create-user'>Create User</Link>
          </div>
          <div>
            <Link to='/delete-user'>Delete User</Link>
          </div>
          <div>
            <Link to='/update-user'>Update User</Link>
          </div>
        </aside>

      </section>
    </div>
  );
}