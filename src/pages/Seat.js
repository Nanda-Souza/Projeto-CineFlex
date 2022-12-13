import Header from "../components/headers/Header";
import SubHeader from "../components/headers/SubHeader";
import SeatList from "../components/seat/SeatList";
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Seat(){
    const text = "Selecione o(s) assento(s)"
    const {idSessao} = useParams()
    const [seats, setSeats] = useState(undefined);    

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);
        promise.then((res) => setSeats(res.data));
        //promise.then(res => console.log(res.data.seats))
      }, []);
      
      if (seats === undefined) {
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
            <SeatList seats={seats.seats}/>            
            <Footer 
                title={seats.movie.title}
                posterURL={seats.movie.posterURL}
                weekday={seats.day.weekday}
                hour={seats.name}
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