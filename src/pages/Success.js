import Header from "../components/headers/Header";
import SubHeader from "../components/headers/SubHeader";
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


export default function Success(){
    const text = "Pedido feito com sucesso!"
    const placeOrder = true
    const location = useLocation();
    const name = location.state.name
    const cpf = location.state.cpf
    
    
    return(
        
        <ScreenContainer> 
            <Header />            
            <SubHeader text={text} placeOrder={placeOrder}/>
            <RequestSeats>
                <li data-test="movie-info" className="request"><strong>Filme e sessão</strong></li>
                <li data-test="movie-info" className="">Enola Holmes </li>
                <li data-test="movie-info" className="ticket">24/06/2021 15:00</li>
            </RequestSeats>
            <RequestSeats>
                <li data-test="seats-info" className="request"><strong>Ingressos</strong></li>
                <li data-test="seats-info" className="">Assento 15</li>
                <li data-test="seats-info" className="ticket">Assento 16</li>
            </RequestSeats>
            <RequestSeats>
                <li data-test="client-info" className="request"><strong>Comprador</strong></li>
                <li data-test="client-info" className="">Nome: {name}</li>
                <li data-test="client-info" className="ticket">CPF: {cpf}</li>
            </RequestSeats>
            <Link style={{textDecoration: 'none'}} to={`/`}>
                <ButtonReserve>
                    <p data-test="go-home-btn" id="button" className="reserve-seats">Voltar pra Home</p>
                </ButtonReserve>
            </Link>
                        
        </ScreenContainer>        
    );
}

                            

const ButtonReserve = styled.button`
    display: flex;
    color: #FFFFFF;
    width: 225px;
    height: 43px;
    margin-top:57px;
    margin-left:70px;
    margin-bottom: 150px;
    align-items: center;
    text-align: center;
    background-color: #E8833A;
    border-radius: 3px;
    border: 1px solid #E8833A;
    .reserve-seats{
        width: 225px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #E8833A;
    }
` 

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

const RequestSeats = styled.ul `
    margin-top: 10px;
    font-size:24px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    .request{
        margin-bottom: 10px;
      }
    .ticket{
        margin-bottom: 35px;
      }
`