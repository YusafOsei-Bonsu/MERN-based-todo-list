import React from 'react';
import { Link } from 'react-router-dom';

const Todo = (props) => (
    <tr>
        <td>{ props.todo.todo_description }</td>
        <td>{ props.todo.todo_responsible }</td>
        <td>{ props.todo.todo_priority }</td>
        <td>{ props.todo.todo_priority }</td>
        <td><Link to={"/edit/"+props.todo._id}>Edit</Link></td>
    </tr>
);

export default Todo;