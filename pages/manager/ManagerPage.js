
import Profile from "../../components/Profile";
import ResearchBox from "../../components/layout/ResearchBox";
import ResearchOutputList from "../../components/research/ResearchOutputList";
import classes from "./ManagerPage.module.css";

import axios from "axios";



export default function ManagerPage() {
  var DUMMY_DATA = [];
  function getOutputs() {

    axios.get("http://localhost:8000/researchOutputs").then((response) => {
      console.log('response.data')
      DUMMY_DATA = response.data;
      console.log(response.data)
      return DUMMY_DATA;
    })

  }

  return (
    <center>
      <div>
        <div>
          <h1>Welcome Manager</h1>
        </div>
        <section>
          <aside className={classes.profile}>
            <Profile />
          </aside>
          <main className={classes.wrapper}>
            <ResearchBox link={'/report'} label={'New Report'}>
              <ResearchOutputList rowData={DUMMY_DATA} />
            </ResearchBox>
          </main>
        </section>
      </div>
    </center>
  );
}
