import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = (props) => {

  const [title, setTitle] = useState('');

  const addTodo = props.addTodoFunc;

  const addTodoFormStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    marginTop: '20px'
  }

  const addTodoInputStyle = {
    padding: '5px',
    outline: 'none'
  }

  const changeTitle = (event) => {
    setTitle(event.target.value)
  }

  const addSingleTodo = (event) => {
    event.preventDefault();
    if (title !== '') {
      addTodo(title);
      setTitle('');
    }
  }

  return(
    <form onSubmit={addSingleTodo} style={addTodoFormStyle}>
      <input 
        type="text" 
        name="title" 
        placeholder="Add Todo..." 
        style={addTodoInputStyle}
        onChange={changeTitle}
        value={title}
      />
      <input
        type="submit"
        value="Add" 
        className="btn" 
      />
      </form>
  )
}

AddTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
}

export default AddTodo;