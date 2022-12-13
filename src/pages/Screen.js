import Header from "../components/headers/Header";
import SubHeader from "../components/headers/SubHeader";
import styled from "styled-components"
import MovieList from "../components/MovieList";

export default function Screen(){
    const text = "Selecione o filme"
    
    return(
        <ScreenContainer> 
            <Header />            
            <SubHeader text={text}/>
            <MovieList />
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div `
    width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
`
