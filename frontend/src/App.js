import { useEffect, useState } from "react";
import ListTodo from "./components/ListTodo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HndleApi";


function App() {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState()

  useEffect(() => {
    getAllTodo(setTodo)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error loading todos:", error);
        setIsLoading(false);
      });
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id)

  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO</h1>
        <div className="top">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Todos...." />
          <div className='add' onClick={isUpdating ? () => updateTodo(text, setText, setIsUpdating, setTodo, todoId) : () => addTodo(text, setText, setTodo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {isLoading ? (
            <h1 style={{ position: 'relative', top: '150px' }}>Loading...</h1>
          ) : (
            todo.map((item) => (
              <ListTodo key={item._id} text={item.text} updateMode={() => updateMode(item._id, item.text)} deleteTodo={() => deleteTodo(item._id, setTodo)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
