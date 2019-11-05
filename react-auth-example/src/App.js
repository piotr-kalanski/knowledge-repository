import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar';
import Login from './containers/Auth/Login';
import Logout from './containers/Auth/Logout';
import Register from './containers/Auth/Register';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import PageAuthenticated from './components/PageAuthenticated';

import { AuthContext } from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {authContext.isAuthenticated && <Route path="/pageAuthenticated" component={PageAuthenticated} />}
        {!authContext.isAuthenticated && <Route path="/login" component={Login} />}
        {!authContext.isAuthenticated && <Route path="/register" component={Register} />}
        {authContext.isAuthenticated && <Route path="/logout" component={Logout} />}
        <Redirect path="/" exact to="/page1" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
