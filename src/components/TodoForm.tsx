import { useRef } from 'react';
import { Todo } from '../interfaces/interfaces';
import {          
    Button, 
    TextArea,
    SaveIcon, 
    DeleteIcon,
    DeleteButton, 
    MainButtonContainer
} from './components';


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
                <TextArea placeholder="Note" ref={ textareaRef }/>
                <MainButtonContainer>
                    <div>
                        <Button type="submit">
                            <SaveIcon />
                            <span>Save</span>
                        </Button>                
                        <DeleteButton onClick={ (e) => handleDelete(e)}>
                            <DeleteIcon />
                            <span>Delete all</span>
                        </DeleteButton>
                    </div>
                </MainButtonContainer>
            </form>
        </>
    )
}
