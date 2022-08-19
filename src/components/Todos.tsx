import React, {useContext} from 'react'
import { TodoContext } from '../store/store'
import TodoItem from './TodoItem'

const Todos: React.FC = () => {

  const todoCtx = useContext(TodoContext);

  return (
    <ul>
        {todoCtx.items.map((item) => {
            return <TodoItem key={item.id} todo={item} onDelete={todoCtx.deleteTodo}/>
        })}
    </ul>
  )
}

export default Todos