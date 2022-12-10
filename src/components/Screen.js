import Header from "./Header";
import SubHeader from "./SubHeader";
import Fotter from "./Fotter";
import Select from "./Select";
import styled from "styled-components"
import MovieList from "./MovieList";

export default function Screen(){
    
    return(
        <ScreenContainer> 
            <Header />            
            <SubHeader />
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
