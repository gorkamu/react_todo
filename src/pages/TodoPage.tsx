import { TodoForm } from '../components/TodoForm'
import { useState, useContext } from 'react';
import { Todo } from '../interfaces/interfaces';
import { TodoList } from '../components/TodoList';
import { ThemeContext, themeMode } from '../context/ThemeContext';
import styled from 'styled-components';

const Wrapper = styled.div<{theme:string}>`
    margin: auto;
    width: 70%;    
    padding: 30px;
    margin-top: 10px;   
    border-radius: 20px;
    ${({ theme }) => theme === themeMode.LIGHT ? `background: #ffffec;` : `background: #6f6f7c;`}
`;

const Logo = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 5%;
    ${({ theme }) => theme === themeMode.DARK && `filter: invert(1);`}
`;

export const TodoPage = () => {
    const { theme } = useContext(ThemeContext)

    const [todos, setTodo] = useState<Todo[]>(() => {
        const saved = localStorage.getItem("todo")
        if(saved) {
            return JSON.parse(saved)
        }
        
        return []
    });

    return (
        <Wrapper theme={ theme }>
            <Logo theme={ theme } src="./todo.png" alt="todo logo"/>
            <TodoForm todos={ todos } setTodo={ setTodo }/>
            <TodoList todos={ todos } setTodo={ setTodo }/>
        </Wrapper>
    )
}
