import React, {useState, useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

const NewTodo = () => {
  const [content, setContent] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', todo: {content}});

    setContent('');
  }
  
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="input-field">
          <input placeholder="New todo" value={content} onChange={(e) => setContent(e.target.value)}/>
          <button type="submit" className="waves-effect waves-teal btn-block btn">
            ADD TO LIST
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;