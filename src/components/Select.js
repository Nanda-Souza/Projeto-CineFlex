import styled from "styled-components";

export default function Select(){
    return(
        <TitleMovie>
        <p className="text">Selecione o filme</p>
        </TitleMovie>
    );
}

const TitleMovie = styled.div`
width: 100%;
min-height: 110px;
margin-top: 87px;
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
`
