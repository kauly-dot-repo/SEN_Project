import { Route, Switch } from "react-router-dom";

// import Layout from "./components/layout/Layout";
import Researcher from "./components/pages/Researcher";
import AllResearchOutputs from "./components/pages/AllResearchOutputs";
import AllResearchers from "./components/pages/AllResearchers";
import MainNavbar from "./components/layout/MainNavbar";

function App() {
  return (

    <div>
      <div>
        <MainNavbar />
      </div>
      {/* <Researcher /> */}
      <Switch>
        <Route path='/' exact>
          <AllResearchOutputs />
        </Route>
        <Route path='/you'>
          <Researcher />
        </Route>
        <Route path='/all-researchers'>
          <AllResearchers />
        </Route>
      </Switch>
    </div>


  );
}

export default App;
