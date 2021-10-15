

import { Route, Switch } from 'react-router-dom';

import MainNavbar from './components/layout/MainNavbar';

import './App.css';

import SystemAdmin from './pages/admin/SystemAdminPage';
import LoginForm from './pages/LoginForm';
import ResearcherPage from './pages/researcher/ResearcherPage';
import ManagerPage from './pages/manager/ManagerPage';
import ResearchOutputsPage from './pages/ResearchOutputsPage';
import NewResearchForm from './components/forms/NewResearchForm';
import NewReportForm from './components/forms/NewReportForm';
import CreateUser from './pages/admin/CreateUser';
import DeleteUser from './pages/admin/DeleteUser';
import UpdateUser from './pages/admin/UpdateUser';


function App() {
  return (
    <div className="App">

      <div>
        <MainNavbar path={'/system-admin'}/>
      </div>


      <Switch>
        
        <Route path='/' exact>
          <LoginForm />
        </Route>
        <Route path='/home' exact>
          <ResearchOutputsPage />
        </Route>
        <Route path='/manager' exact>
          <ManagerPage />
        </Route>
        <Route path='/researcher' exact>
          <ResearcherPage />
        </Route>
        <Route path='/system-admin' >
          <SystemAdmin />
        </Route>
        
        <Route path='/create-user' >
          <CreateUser />
        </Route>
        <Route path='/delete-user' >
          <DeleteUser />
        </Route>
        <Route path='/update-user' >
          <UpdateUser />
        </Route>

        <Route path='/new-output' >
          <NewResearchForm />
        </Route>
        <Route path='/report' >
          <NewReportForm />
        </Route>
        
        {/* <Route path='/guest-user' exact>

        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
