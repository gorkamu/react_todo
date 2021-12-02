import { TodoForm } from '../components/TodoForm'
import { useState } from 'react';
import { Todo } from '../interfaces/interfaces';
import { TodoList } from '../components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: auto;
    width: 70%;    
    padding: 30px;
    margin-top: 10px;    
    background: #ffffec;
    border-radius: 20px;
`;

const Logo = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 5%;
`;

export const TodoPage = () => {

    const [todos, setTodo] = useState<Todo[]>(() => {
        const saved = localStorage.getItem("todo")
        if(saved) {
            return JSON.parse(saved)
        }
        
        return []
    });

    return (
        <Wrapper>
            <Logo src="./todo.png" alt="todo logo"/>
            <TodoForm todos={ todos } setTodo={ setTodo }/>
            <TodoList todos={ todos } setTodo={ setTodo }/>
        </Wrapper>
    )
}
