import React from 'react';
import CreateTodo from '../components/CreateTodo.jsx';
import TodoList from '../components/TodoList.jsx';
import EditTodo from '../components/EditTodo.jsx';
import Logo from '../components/Logo.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render = () => {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer"><Logo /></a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item"><Link to="/" className="nav-link">Todos</Link></li>
                <li className="navbar-item"><Link to="/create" className="nav-link">Create Todo</Link></li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
            <Route exact path="/" component={ TodoList } />
            <Route path="/edit/:id" component={ EditTodo } />
            <Route path="/create" component={ CreateTodo } />
          </Switch>
        </div>
      </Router>
    );
  } 
 
}

export default App;
