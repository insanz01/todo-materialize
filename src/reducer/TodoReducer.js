import uuid from 'uuid/v1';

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        content: action.todo.content,
        id: uuid()
      }]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
}