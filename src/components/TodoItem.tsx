import React from 'react'
import {Todo} from '../model/Todo'

const TodoItem: React.FC<{todo: Todo, onDelete: (id: string) => void}> = (props) => {
  return (
    <li>
        <span>{props.todo.text}{' '}</span>
        <button onClick={() => props.onDelete(props.todo.id)}>Delete Item</button>
    </li>
  )
}

export default TodoItem