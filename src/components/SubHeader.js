import styled from "styled-components";

export default function SubHeader(){
    return(
        <SelectMovie> 
        <p>Selecione o filme</p>
        </SelectMovie>        
        
    );
}

const SelectMovie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110px;
    font-size: 24px;
    color: #293845;
    margin-top: 67px;
    background-color: #FFFFFF;
    letter-spacing: 0.04em;
`

