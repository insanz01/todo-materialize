import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const {todos, dispatch} = useContext(TodoContext)
  return todos.length ? (
    <ul className="collection">
      {todos.map(todo => {
        return (
          <li key={todo.id} onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})} className="collection-item">
            <h5>{todo.content}</h5>
          </li>
        );
      })}
    </ul>
  ) : (
    <h5 className="center">No list! You can enjoy your day :)</h5>
  );
}

export default TodoList;