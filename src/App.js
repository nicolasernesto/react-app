import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoItem} from './TodoItem'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoSearch} from './TodoSearch'
import './App.css';
const todos = [{text: 'cortar cebolla', completed: false},
               {text: 'Tomar curso', completed: false},
               {text: 'task3', completed: false}
              ]
function App(props) {
  return (
    <React.Fragment>
    <TodoCounter />
    
    <TodoSearch />
    <input placeholder='cebolla'></input>
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />{/*Al momento de iterar listas y renderizar, se manda key 
        obligatoriamente para identificar cada valor
       */}
      ))}
    </TodoList>
    <CreateTodoButton/>
    <button>+</button>
    </React.Fragment>
    
  );
}

export default App;
