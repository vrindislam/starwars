import {Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";
import Characters from "../pages/Characters";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/list' component={Characters}/>
      <Route exact path="*" render={() => <h1>You are on the wrong page</h1>}/>
    </Switch>
  );
};
export default MainRoutes;