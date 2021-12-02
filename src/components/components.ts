import styled from 'styled-components';
import { AiOutlineSave } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";


export const TextArea = styled.textarea`
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

export const Button = styled.button`
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

export const DeleteButton = styled(Button)`
    color: #833f55;
    background: #fdb1ca;
    margin-left: 5px;

    &:hover {
        color: #833f55;
        background: #e9a0b8;
    }
`;

export const SaveIcon = styled(AiOutlineSave)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
    margin-right: 5px;
`;

export const DeleteIcon = styled(BsTrash)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
    margin-right: 5px;
`;

export const MainButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;