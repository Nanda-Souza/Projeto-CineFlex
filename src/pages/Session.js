import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import styled from "styled-components"
import SessionList from "../components/SessionList";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";


export default function Session(){
    const text = "Selecione o horário"
    const {idFilme} = useParams()
    const [sessions, setSessions] = useState(undefined);

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(URL);
        promise.then((res) => setSessions(res.data));
        //promise.then(res => console.log(res.data))
      }, []);
      
      if (sessions === undefined) {
        return(
            <ScreenContainer>
                <p>Carregando...</p>
            </ScreenContainer>
        )
      }
      
    
    
    return(
        <ScreenContainer> 
            <Header />            
            <SubHeader text={text}/>
            <SessionList sessions={sessions.days}/>
            <Footer 
                title={sessions.title}
                posterURL={sessions.posterURL}
            />            
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
