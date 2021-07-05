import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App container">
      <h1 className="center blue-text text-darken-2">TODO'S LIST</h1>
      <TodoContextProvider>
        <TodoList />
        <NewTodo />
      </TodoContextProvider>
    </div>
  );
}

export default App;