import React, { Component } from 'react';
import './App.css';

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               toDos: [],
               toDo: '',
          };
     }

     render() {
          const { toDos, toDo } = this.state;

          return (
               <div className="app">
                    <div className="mainHeading">
                         <h1>ToDo List</h1>
                    </div>
                    <div className="subHeading">
                         <br />
                         <h2>Whoop, it's Today 🌝☕ </h2>
                    </div>
                    <div className="input">
                         <input
                              value={toDo}
                              onChange={(e) => this.setState({ toDo: e.target.value })}
                              type="text"
                              placeholder="🖊️ Add item..."
                         />
                         <i
                              onClick={() =>
                                   this.setState({
                                        toDos: [...toDos, { id: Date.now(), text: toDo, status: false }],
                                        toDo: '',
                                   })
                              }
                              className="fas fa-plus"
                         ></i>
                    </div>
                    <div className="todos">
                         {toDos.map((obj) => (
                              <div className="todo" key={obj.id}>
                                   <div className="left">
                                        <input
                                             checked={obj.status}
                                             onChange={(e) =>
                                                  this.setState((prevState) => ({
                                                       toDos: prevState.toDos.map((todo) =>
                                                            todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                                                       ),
                                                  }))
                                             }
                                             type="checkbox"
                                             name=""
                                             id=""
                                        />
                                        <p>{obj.text}</p>
                                   </div>
                                   <div className="right">
                                        <i
                                             onClick={() =>
                                                  this.setState((prevState) => ({
                                                       toDos: prevState.toDos.filter((todo) => todo.id !== obj.id),
                                                  }))
                                             }
                                             className="fas fa-times"
                                        ></i>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          );
     }
}

export default App;