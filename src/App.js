import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import ProfileDetails from "./ProfileDetails/ProfileDetails";


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path ="/">
      <Home></Home>
      </Route>
     
      <Route  path ="/ProfileDetails/:_id">
      <ProfileDetails></ProfileDetails>
      </Route>
     
     
    </Switch>
  </Router>

  );
}

export default App;
