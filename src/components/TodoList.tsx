import { Todo } from '../interfaces/interfaces';
import { TodoItem } from './TodoItem';
import styled from 'styled-components';

const List = styled.div`
    margin-top: 10px;
`;

interface TodoListProps {
    todos: Todo[],
    setTodo: any;
}

export const TodoList = ({todos, setTodo}: TodoListProps) => {
    return (
        <List>
            {
                todos.map((todo, idx) => (
                    <TodoItem key={idx} todo={todo} setTodos={setTodo} todos={todos}/>
                ))
            }            
        </List>
    )
}
