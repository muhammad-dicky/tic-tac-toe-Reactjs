import './Todo.css'
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";
import { useState } from 'react';
import React from 'react';

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Baris Satu' },
        { id: 2, title: 'Baris Dua' },
        { id: 3, title: 'Baris Tiga' },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }


    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}


export default Todo