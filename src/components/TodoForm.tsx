import { useRef, useState } from 'react';
import { Todo } from '../interfaces/interfaces';
import { AiOutlineSave, AiFillBulb, AiOutlineBulb } from 'react-icons/ai';
import { BsTrash } from "react-icons/bs";
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
    color: #818181;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
    &:focus {
        outline: none !important;
        border:0px;
    }

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

const BulbButton = styled(Button)`
    color: #833f55;
    background: #be9ddf;

    &:hover {
        background: #967cb1;
    }
`;

const SaveIcon = styled(AiOutlineSave)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
    margin-right: 5px;
`;

const DeleteIcon = styled(BsTrash)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
    margin-right: 5px;
`;

const LightIcon = styled(AiOutlineBulb)`
    color: white;
    font-size: 15px;
    font-weight: 100;
    vertical-align: bottom;    
`;
const DarkIcon = styled(AiFillBulb)`
    color: white;
    font-size: 15px;
    font-weight: 100;
    vertical-align: bottom;    
`;


interface TodoFormProps {
    todos: Todo[];
    setTodo: any;
}

export const TodoForm = ({todos, setTodo}: TodoFormProps) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [ isLightMode, setLightMode ] = useState<boolean>(true);

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

    const handleThemeMode = () => {
        setLightMode(!isLightMode);
    }

    return (
        <>            
            <form onSubmit={ handleSubmit }>
                <TextArea placeholder="Note" ref={ textareaRef }/>
                <div style={{ 
                    display: "flex",
                    justifyContent: "space-between"
                }}>
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
                    {/* <div>
                        <BulbButton onClick={ handleThemeMode }>
                            { isLightMode && <LightIcon/> || <DarkIcon/> }                            
                        </BulbButton>             
                    </div> */}
                </div>
            </form>
        </>
    )
}
