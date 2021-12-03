import { useRef, useEffect, useContext } from 'react';
import { ThemeContext, themeMode } from '../context/ThemeContext';
import { Todo } from '../interfaces/interfaces';
import {          
    Button, 
    TextArea,
    SaveIcon, 
    BulbButton,
    DeleteIcon,
    DeleteButton,     
    MainButtonContainer,
    SunIcon,
    MoonIcon
} from './components';


interface TodoFormProps {
    todos: Todo[];
    setTodo: any;
}

export const TodoForm = ({todos, setTodo}: TodoFormProps) => {

    const { theme, setTheme } = useContext(ThemeContext)

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
    
    const toggleTheme = () => {
        if(theme === themeMode.LIGHT) {
            setTheme(themeMode.DARK)            
            document.body.style.backgroundColor = "#001b3b"
        }else{
            setTheme(themeMode.LIGHT)
            document.body.style.backgroundColor = "bisque"
        }
    }

    useEffect( () => {
        localStorage.setItem("todo", JSON.stringify(todos))
    }, [todos])

    return (
        <>            
            <form onSubmit={ handleSubmit }>
                <TextArea theme={ theme } placeholder="Note" ref={ textareaRef }/>
                <MainButtonContainer>
                    <div>
                        <Button type="submit" theme={ theme }>
                            <SaveIcon />
                            <span>Save</span>
                        </Button>                
                        <DeleteButton theme={ theme } onClick={ (e) => handleDelete(e)}>
                            <DeleteIcon />
                            <span>Delete all</span>
                        </DeleteButton>
                    </div>
                    <div>
                        <BulbButton theme={ theme } onClick={ toggleTheme }>
                            { (theme === themeMode.LIGHT) ? <SunIcon /> : <MoonIcon />}                            
                        </BulbButton>
                    </div>
                </MainButtonContainer>
            </form>
        </>
    )
}
