import styled from "styled-components";

export default function Fotter(){
    return(
        <FotterOk> 
        <h1>Enola Holmes</h1>
        </FotterOk>
    );
}

const FotterOk = styled.div`
width: 100%;
min-height: 117px;
background-color: #DFE6ED;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
border:  1px solid #9EADBA;
color: #293845;
padding: 10px;
`