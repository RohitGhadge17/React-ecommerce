import styled from "styled-components";

export const StyledNavbar = styled.div`
    width: 100%;
    height: 80px;
    background-color:  rgb(245,245,245);
    color: #726466;
    font-size: 20px;   
`

export const NavItem = styled.div`
    display: flex;
    justify-content: flex-end;  
    /* flex-direction:column ; */
    align-items: center;
    gap: 30px;
    padding:1.5rem 20px;
    font-size: 15px;
    color: gray;    
`

export const Icon = styled.div`
    margin-left: 50px;

`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(182,208,226)
    }
`