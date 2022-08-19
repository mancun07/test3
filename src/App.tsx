import React, { useContext } from 'react';
import Todos from './components/Todos'
import './App.css';
import NewTodo from './components/NewTodo';
import {TodoContext} from './store/store'

function App() {

  // const todoCtx = useContext(TodoContext);

  return (
    <div className="App">
      <Todos />
      <NewTodo />
    </div>
  );
}

export default App;
