import React from 'react';
import axios from 'axios';
import "../styles/CreateTodo.css";

class CreateTodo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { TodoDescription: '', TodoResponsible: '', TodoPriority: '', TodoCompleted: false }
    }

    // Updates the to-do description with the description entered by the user
    onChangeTodoDescription = e => this.setState({ TodoDescription: e.target.value });

    // Updates the to-do responsibility with the responsibility entered by the user
    onChangeTodoResponsible = e => this.setState({ TodoResponsible: e.target.value });

    // Updates the to-do priority with the priority entered by the user
    onChangeTodoPriority = e => this.setState({ TodoPriority: e.target.value });

    // Creates a new todo item upon pressing submit 
    onSubmit = e => {
        // Prevents refreshing after submit
        e.preventDefault();

        // Shows the todo description, responsibility and priority entered by the user
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.TodoDescription}`);
        console.log(`Todo Responsible: ${this.state.TodoResponsible}`);
        console.log(`Todo Priority: ${this.state.TodoPriority}`);

        let newTodo = {
            todo_description: this.state.TodoDescription,
            todo_responsible: this.state.TodoResponsible,
            todo_priority: this.state.TodoPriority,
            todo_completed: this.state.TodoCompleted
        }

        // Adding the new to-do task into the database
        axios.post("http://localhost:4000/todos/add", newTodo).then(res => console.log(res.data));

        // Resets to initial state for new todo tasks to be entered
        this.setState({ TodoDescription: '', TodoResponsible: '', TodoPriority: '', TodoCompleted: false });
    }

    render = () => {
        return (
            <div className="space-above">
                <h3>Create New Todo</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeTodoDescription} />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text" className="form-control" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority} 
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTodo;