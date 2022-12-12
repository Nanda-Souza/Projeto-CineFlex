import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "styled-components"
/*import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import SessionList from "../components/SessionList";
import { useEffect, useState } from "react";
import axios from "axios";*/


export default function Seat(){
    const text = "Selecione o(s) assento(s)"
    //const {idFilme} = useParams()
    /*const [sessions, setSessions] = useState(undefined);

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
      }*/
      
    
    
    return(
        <ScreenContainer> 
            <Header />            
            <SubHeader text={text}/>                       
            
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