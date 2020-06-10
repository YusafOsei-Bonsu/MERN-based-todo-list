import React from 'react';
import Axios from 'axios';
import Todo from '../components/Todo.jsx';

class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    // Display every to-do task
    TodoList = () => this.state.todos.map((currentTodo, i) => <Todo todo={currentTodo} key={i} />);

    // Retrieving todos data from the MongoDB database
    componentDidMount = () => {
        Axios.get("http://localhost:4000/todos/")
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));
    }

    render = () => {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.TodoList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;