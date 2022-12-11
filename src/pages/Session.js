import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import styled from "styled-components"
import SessionList from "../components/SessionList";


export default function Session(){
    const text = "Selecione o horário"
    
    return(
        <ScreenContainer> 
            <Header />            
            <SubHeader text={text}/>
            <SessionList />
            <Footer />            
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
