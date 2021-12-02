import { useRef } from 'react';
import { Todo } from '../interfaces/interfaces';
import styled from 'styled-components';

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    min-height: 80px;
    background:#dfdfdf;
    resize: none;
    border: none;   
    padding: 10px; 
    border-radius: 5px;
    color: #6e6e6e
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;    
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #533f83;
    background: #b1f2fd;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #38406c;
        background: #abdce5;
    }
`;

const DeleteButton = styled(Button)`
    color: #833f55;
    background: #fdb1ca;
    margin-left: 5px;

    &:hover {
        color: #833f55;
        background: #e9a0b8;
    }
`;

interface TodoFormProps {
    todos: Todo[];
    setTodo: any;
}

export const TodoForm = ({todos, setTodo}: TodoFormProps) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()        
        const value = textareaRef.current!.value;
        if(value !== '') {
            setTodo([...todos, {
                id: Date.now(),
                note: value,
                deleted: false
            }])

            textareaRef.current!.value = "";
        }
    }

    const handleDelete = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setTodo([])
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <TextArea placeholder="Nota" ref={ textareaRef }/>
                <Button type="submit">Guardar</Button>
                <DeleteButton onClick={ (e) => handleDelete(e)}>Borrar</DeleteButton>
            </form>
        </>
    )
}
