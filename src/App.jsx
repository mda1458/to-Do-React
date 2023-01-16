import './App.css';
import Navbar from './components/Navbar';
import {Todos} from './components/Todos';
import { useState,useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const todoDelete=(todo)=>{
    setTodo(
      todos.filter((e)=>{
        return e!==todo;
      })
    )
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo=(title,desc)=>{
    let sno=todos.length;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodo([...todos,myTodo]);
  }

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <Navbar/>
      <Todos todos={todos} todoDelete={todoDelete} addTodo={addTodo}/>
    </div>
  );
}

export default App;
