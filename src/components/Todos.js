import React from "react";
import { useState } from 'react';

export const Todos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <>
    {/* Add a to-do  */}
    <div className="container my-5">
        <h3>Add a To Do</h3>
        <div class="row m-3">
            <div class="col">
                <input name="title" type="text" class="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="To Do Title" />
            </div>
            <div class="col">
                <input name="desc" type="text" class="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" />
            </div>
            <div class="col">
                <button type="submit" class="btn btn-sm btn-success" onClick={submit}>Add</button>
            </div>
        </div>
    </div>
    {/* Displaying To-Do List */}
    <div className="container my-5">
      <h3>To Dos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <div className="d-inline-flex p-2 card m-3" key={todo.sno}>
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">{todo.desc}</p>
                  <button className="btn btn-sm btn-danger" onClick={()=>{props.todoDelete(todo)}}>Delete</button>
                </div>
              </div>
            );
          })}
    </div>
    </>
  );
};
