import styled from "styled-components";

export default function Header(){
    return(
        <HeaderTop> 
        <h1>CINEFLEX</h1>
        </HeaderTop>        
        
    );
}

const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    color: #E8833A;
    width: 375px;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
`

