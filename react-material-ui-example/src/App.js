import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Search from './containers/Search/Search';
// import Login from './containers/Auth/Login';
// import Register from './containers/Auth/Register';
// import LearningItemDetails from './containers/LearningItem/LearningItemDetails';
import DevelopmentPlans from './containers/DevelopmentPlan/DevelopmentPlans';
// import DevelopmentPlan from './containers/DevelopmentPlan/DevelopmentPlan';
// import CompletedOrInProgressLearningItems from './components/LearningItemUserStatus/CompletedOrInProgressLearningItems';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/search" component={Search} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
          <Route path="/development_plan/:id" component={DevelopmentPlan} />
          <Route path="/user_learning_items" component={CompletedOrInProgressLearningItems} />
          <Route path="/item/:id" component={LearningItemDetails} /> */}
          <Route path="/development_plans" component={DevelopmentPlans} />
          <Redirect path="/" exact to="/search" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;