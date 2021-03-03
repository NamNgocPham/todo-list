import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {

  // console.log(props);
  // const { todoProps } = props;
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;

  // Style
  const todoItemStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBotton: '1px #ccc dotted',
    textDecoration: todo.completed ? 'line-through' : 'none' ,
    marginTop: '20px'
  }

  const deleteButtonStyle = {
    background: '#2c3e50',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'right'
  }

  return (
    <p style={todoItemStyle} >
      <input 
        type="checkbox" 
        onChange={markComplete.bind(this,todo.id)} 
        checked={todo.completed}  
      />
      &nbsp;
      { todo.title }
      <button 
        style={deleteButtonStyle}
        onClick={ () => deleteTodo(todo.id) }
      >
        Delete
      </button>
    </p>
  )
}

TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  deleteTodoFunc: PropTypes.func.isRequired
}

export default TodoItem;