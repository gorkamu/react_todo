import { Todo } from '../interfaces/interfaces';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext, themeMode } from '../context/ThemeContext';
import styled from 'styled-components';


const getItemTheme = (theme:string, deleted:boolean) => {
    if(!deleted && theme === themeMode.LIGHT) {
        return `
            background: white; 
            color: black;
            border: 1px solid #cbcbb9;
        `
    }

    if(!deleted && theme === themeMode.DARK) {
        return `
            background: black; 
            color: white;
            border: 1px solid black;
        `
    }

    if(deleted && theme === themeMode.LIGHT) {
        return `
            background: #cbcbb9; 
            color: #707068;
            border: 1px solid #cbcbb9;
        `
    }

    if(deleted && theme === themeMode.DARK) {
        return `
            background: #343446; 
            color: black;
            border: 1px solid #343446;
        `
    }
}

const Item = styled.div<{deleted: boolean}>`    
    ${({ theme, deleted }) => getItemTheme(theme, deleted)}    
    
    padding: 10px;
    margin: 5px 0px;
    border-radius: 5px;    
    cursor:pointer;
    user-select: none;
`;

const Label = styled.label<{deleted: boolean}>`
    text-decoration: ${props => props.deleted ? "line-through" : "none" };
    user-select: none;
`;


interface TodoItemProps {
    todo: Todo,
    todos: Todo[];
    setTodos: any;
}

export const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
    
    const { theme } = useContext(ThemeContext)

    const [isDeleted, setDeleted] = useState<boolean>(() => {
        return todo.deleted;
    });

    const deleteTodo = (todos: Todo[], e?: React.ChangeEvent<HTMLInputElement>) => {
        let element = e ? e.target.checked : !todo.deleted;

        setDeleted(element)        
        const updatedTodos = todos.map(item => {
            if(item.id === todo.id) {
                return { ...item, deleted: e ? e.target.checked : !item.deleted }
            }

            return item
        })

        setTodos(updatedTodos)        
    }

    useEffect( () => {
        localStorage.setItem("todo", JSON.stringify(todos))
    }, [todos])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => deleteTodo(todos, e)
    const handleClick = () => deleteTodo(todos)

    return (
        <Item theme={ theme } deleted={ isDeleted } onClick={ handleClick }>
            <input type="checkbox" onChange={ (e) => handleChange(e) } checked={ isDeleted }/>
            <Label deleted={isDeleted}>{ todo.note }</Label>            
        </Item>
    )
}
