import React, {useContext, useRef} from 'react'
import { Todo } from '../model/Todo';
import { TodoContext } from '../store/store';

const NewTodo: React.FC = () => {

    const todoCtx = useContext(TodoContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const inputRefValue = inputRef.current!.value;
        todoCtx.addTodo(new Todo(inputRefValue));
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="text">Add New Todo</label>
        <input type="text" id='text' name='text' ref={inputRef}/>
        <button>Submit</button>
    </form>
  )
}

export default NewTodo