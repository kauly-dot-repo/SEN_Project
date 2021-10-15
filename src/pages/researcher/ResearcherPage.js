import Profile from "../../components/Profile";
import ResearchBox from "../../components/layout/ResearchBox";
import ResearchOutputList from "../../components/research/ResearchOutputList";
import classes from "./ResearcherPage.module.css";

import axios from "axios";





// console.log(fetchData);
// const DUMMY_DATA = [
//   {
//     id: 'r1',
//     title: 'The Research on the Thing that Happened',
//     subtitle: 'The thing happened and changed everything we knew about other things',
//     datePublished: '02/10/2021',

//   },
//   {
//     id: 'r2',
//     title: 'The Research on the Other Thing that Happened',
//     subtitle: 'The other thing was even more important to everything we knew about other things',
//     datePublished: '02/10/2021',

//   },
//   {
//     id: 'r2',
//     title: 'The Research on the Third Thing that Happened',
//     subtitle: 'The Third thing happened after the second thing and changes something...',
//     datePublished: '02/10/2021',

//   },]

function Researcher() {

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
      <section>
        <aside className={classes.profile}>
          <Profile />
        </aside>
        <main className={classes.wrapper}>
          <ResearchBox>
            <ResearchOutputList rowData={DUMMY_DATA} />
          </ResearchBox>
        </main>
      </section>
    </center>
  );

}

export default Researcher;
