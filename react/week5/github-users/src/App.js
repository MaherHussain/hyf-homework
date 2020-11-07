
import './App.css';
import "semantic-ui-css/semantic.min.css";
import Home from './Components/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchfield from './Components/Searchfield/Searchfield';
import User from './Components/User/User';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path = '/user/:id' component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
