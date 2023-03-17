import styled from "styled-components";

export const Tab = styled.button`
width: 100%;
    font-size: 20px;
    padding: 20px 20px;
    cursor: pointer;
    opacity: 0.6;
    background-color:  rgb(245,245,245);
    border: 0;
    outline: 0;

    &:hover {
        border-bottom: 2px solid blue;
        opacity: 1;
    }
    
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`