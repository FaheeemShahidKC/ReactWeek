import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Toda 🌝☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    checked={obj.status}
                    onChange={(e) => {
                      setToDos((toDos) =>
                        toDos.map((todo) =>
                          todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                        )
                      );
                    }}
                    type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => {
                      setToDos((toDos) => toDos.filter((todo) => todo.id !== obj.id));
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;