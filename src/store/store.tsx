import { createContext, ReactNode, useState} from 'react';
import {Todo} from '../model/Todo'


interface contextObj {
    items: Todo[],
    addTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}


export const TodoContext = createContext<contextObj>({
    items: [],
    addTodo: (todo: Todo) => {},
    deleteTodo: (id: string) => {}
});


const TodoContextProvider: React.FC<{children?: ReactNode}> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (newTodo: Todo) => {
        return setTodos(prevState => {
            return [...prevState, newTodo];
        })
    }

    const removeTodoHandler = (id: string) => {
        return setTodos(prevState => {
            return prevState.filter(el => el.id !== id);
        })
    }

    const transfObj: contextObj = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: removeTodoHandler
    }


    return (
        <TodoContext.Provider value={transfObj}>
            {props.children}
        </TodoContext.Provider>
    )

}


export default TodoContextProvider