import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render = () => {
    return (
      <Router>
        <div className="container">
          <h2>MERN Todo List</h2>
        </div>
        <Switch>
          <Route exact path="/" component={ TodosList }></Route>
          <Route path="/edit/:id" component={ EditTodo }></Route>
          <Route path="/create" component={ CreateTodo }></Route>
        </Switch>
      </Router>
    );
  } 
 
}

export default App;
