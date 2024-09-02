import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    } else {
      setTodos((prevTodos) => [...prevTodos, todo]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write your to do..." />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((todoList, index) => {
          return <li key={index}>{todoList}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
