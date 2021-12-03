import styled from 'styled-components';
import { themeMode } from '../context/ThemeContext';
import { AiOutlineSave } from "react-icons/ai";
import { BsTrash, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    min-height: 80px;
    ${({ theme }) => theme === themeMode.LIGHT ? `background: #dfdfdf;` : `background: #fbfbfb;`}
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
    ${({ theme }) => theme === themeMode.LIGHT ? `color: #533f83;` : `color: #acc07c;`}
    ${({ theme }) => theme === themeMode.LIGHT ? `background: #b1f2fd;` : `background: #4e0d02;`}
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        ${({ theme }) => theme === themeMode.LIGHT ? `color: #38406c;` : `color: #c7bf93;`}
        ${({ theme }) => theme === themeMode.LIGHT ? `background: #abdce5;` : `background: #54231a;`}
    }
`;

export const DeleteButton = styled(Button)`
    ${({ theme }) => theme === themeMode.LIGHT ? `color: #833f55;` : `color: #7cc0aa;`}
    ${({ theme }) => theme === themeMode.LIGHT ? `background: #fdb1ca;` : `background: #024e35;`}

    margin-left: 5px;

    &:hover {
        ${({ theme }) => theme === themeMode.LIGHT ? `color: #833f55;` : `color: #7cc0aa;`}
        ${({ theme }) => theme === themeMode.LIGHT ? `background: #e9a0b8;` : `background: #165f47;`}
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

export const BulbButton = styled(Button)`
    ${({ theme }) => theme === themeMode.LIGHT ? `color: #65877a;` : `color: #9a7885;`}
    ${({ theme }) => theme === themeMode.LIGHT ? `background: #ADE6D0;` : `background: #52192f;`}

    &:hover {
        ${({ theme }) => theme === themeMode.LIGHT ? `color: #65877a;` : `color: #9a7885;`}
        ${({ theme }) => theme === themeMode.LIGHT ? `background: #9dc9b8;` : `background: #623647;`}
    }
`;

export const SunIcon = styled(BsFillSunFill)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
`;

export const MoonIcon = styled(BsFillMoonFill)`
    vertical-align: bottom;
    font-size: 15px;
    font-weight: 100;
`;

export const MainButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;