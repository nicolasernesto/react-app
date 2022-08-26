import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import {TodoItem} from '../TodoItem'
import {TodoList} from '../TodoList'
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoSearch} from '../TodoSearch'
import './App.css';
import "./General.css"
const todosDefault = [{text: 'task1', completed: false},
               {text: 'task2', completed: false},
               {text: 'task3', completed: false},
               {text: 'task4', completed: true}
              ]
 
function App(props) {
  let searchedTodos = [];

  const [variable, setVariable] = React.useState('') // estado global
  const [todos, setTodos] = React.useState(todosDefault) // estado para las tareas, por defecto el array hardcodeado
  const completedTodos = todos.filter(todo => !!todo.completed).length; // filtramos en el estado global de la aplciacion por todos == true
  
  // que es lo mismo poner !!condition a condition == true 
  const totalTodos = todos.length // cantidad total de listas
  if (!variable.length>=1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText =  variable.toLowerCase()
      return todoText.includes(searchText) //retorna los todos que cumplen  
    })
    
  }
  const completeTodos = (text) => {
    const todoindex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]  // 
    newTodos[todoindex] = {
      text: newTodos[todoindex].text ,
      completed : true
    }
    setTodos(newTodos)
    
  }
  const deleteTodos = (text) => {
    const todoindex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]  // 
    newTodos.splice(todoindex,1)
    setTodos(newTodos)
    
  }
  return (
    <React.Fragment>
    <div className='container'>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
        />
      <TodoSearch  variable={variable} setVariable={setVariable} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={ ()=>completeTodos(todo.text) } onDelete={
            ()=>deleteTodos(todo.text)
           }/>  
          ))}
        {/* se debe mandar un identificador cuando se renderizan lists */}
      </TodoList>
      <CreateTodoButton/>
    </div>
    </React.Fragment>
    
  );
  
}

export default App;
