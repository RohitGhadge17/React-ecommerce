import styled from "styled-components";

export const Wrap = styled.div`
    width: 1000px;
    margin-left: 350px;
    margin-top: 50px;
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
    transition: 0.4s;
    width: 300px;
    height: 400px;
    background-color: #fff;
    text-align: center;
    font-size: 16px;
    font-family: sans-serif;
    float:  left;
    margin: 10px;
   border-radius: 1.2rem;
`

export const Container = styled.div`
    padding: 7px 16px;
`

export const Image = styled.img`
    width: 100%;
    height: 200px;
    transition: all 0.3s;

    &:hover{
        scale: 1.1;
    }

`

export const Button = styled.button`
color: #ececec;
display: inline-block;
text-decoration: none;
background-color: #2c3e50;
padding: 1rem 2rem;
border-radius: 1rem;
font-size: 14px;
transition: all 0.2s;

&:hover{
    transform: scale(1.1);
}
`