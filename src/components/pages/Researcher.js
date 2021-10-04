import Profile from "../layout/profile/Profile";
import ResearchBox from "../layout/ResearchBox";
import ResearchOutputList from "../research-outputs/ResearchOutputsList";
import classes from "./Researcher.module.css";
const DUMMY_DATA = [
  {
    id: 'r1',
    title: 'The Research on the Thing that Happened',
    subtitle: 'The thing happened and changed everything we knew about other things',
    datePublished: '02/10/2021',

  },
  {
    id: 'r2',
    title: 'The Research on the Other Thing that Happened',
    subtitle: 'The other thing was even more important to everything we knew about other things',
    datePublished: '02/10/2021',

  },
  {
    id: 'r2',
    title: 'The Research on the Third Thing that Happened',
    subtitle: 'The Third thing happened after the second thing and changes something...',
    datePublished: '02/10/2021',

  },]

function Researcher() {
  return (

    <section>
      
      
      <aside>
        <Profile />
      </aside>
      <main>
        <ResearchBox>
          <ResearchOutputList researchOutputs={DUMMY_DATA} />
        </ResearchBox>
      </main>
    </section>
  );

}

export default Researcher;