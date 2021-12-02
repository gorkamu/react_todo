import { TodoForm } from '../components/TodoForm'
import { useState } from 'react';
import { Todo } from '../interfaces/interfaces';
import { TodoList } from '../components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: auto;
    width: 60%;    
    padding: 30px;
    margin-top: 10px;    
    background: #ffffec;
    border-radius: 20px;
`;

export const TodoPage = () => {

    const [todos, setTodo] = useState<Todo[]>([]);

    return (
        <Wrapper>
            <TodoForm todos={ todos } setTodo={ setTodo }/>
            <TodoList todos={ todos } setTodo={ setTodo }/>
        </Wrapper>
    )
}
