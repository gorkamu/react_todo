import { Todo } from '../interfaces/interfaces';
import { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div<{deleted: boolean}>`
    background: white;
    background: ${props => props.deleted ? "#cbcbb9" : "white" };
    color: ${props => props.deleted ? "#707068" : "black" };
    padding: 10px;
    margin: 5px 0px;
    border-radius: 5px;
    border: 1px solid #cbcbb9;
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
    
    const [isDeleted, setDeleted] = useState<boolean>(false);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => deleteTodo(todos, e)
    const handleClick = () => deleteTodo(todos)

    return (
        <Item deleted={ isDeleted } onClick={ handleClick }>
            <input type="checkbox" onChange={ (e) => handleChange(e) } checked={ isDeleted }/>
            <Label deleted={isDeleted}>{ todo.note }</Label>            
        </Item>
    )
}
