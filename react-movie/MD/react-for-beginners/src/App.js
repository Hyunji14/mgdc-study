import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    // cannot do toDos.push() since we can't modify the state direclty
    setTodos((currentArr) => [toDo, ...currentArr]);
    setTodo("");
  };
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add todo list</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
