import styled from "styled-components";
import { useState } from "react";
import { LInk, useNavigate } from "react-router-dom";
import axios from "axios";


export default function ReserveSeat(ids){
    const [userName, setUSerName] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate()
    
    
    
    function sendReservation(e){
        e.preventDefault()

        const userSelection = {ids: ids.ids, name: userName, cpf: cpf}
        console.log(userSelection)
        
        const url_post = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        const promise = axios.post(url_post, userSelection,
            { headers: { "Content-Type": "application/json" } }
            )
        promise.then( res => {
            console.log(res)
            navigate('/sucesso', 
            {state: {
                name: userName,
                cpf: cpf
            }})

        })
        promise.catch(err => console.log(err.response.data))

        setUSerName("")
        setCpf("")
        


    }
    return(
        <form onSubmit={sendReservation}>
        <InputText> 
            <p className="buy">Nome do comprador:</p>
            <input
                data-test="client-name" 
                type="text-name"
                value={userName} 
                onChange={e => setUSerName(e.target.value)}
                placeholder="Digite seu nome..." 
                required
                />

            <p className="cpf">CPF do comprador:</p>
            <input 
                data-test="client-cpf"
                type="text-cpf" 
                value={cpf} 
                onChange={e => setCpf(e.target.value)}
                placeholder="Digite seu cpf..." 
                required
                />
        </InputText>
        <ButtonReserve>
            <p data-test="book-seat-btn" id="button" className="reserve-seats">Reservar assento(s)</p>
        </ButtonReserve>
        </form>
        
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

const InputText = styled.div`
    font-size: 13px;
    margin-top: 42px;
    margin-left: 24px;    
    font-size: 18px;
    color:  #293845;
    input {
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;        
        ::placeholder {
            margin-left: 18px;
            color: #AFAFAF;
            font-weight: 400;
            font-style: italic;
            font-size: 18px;
        }
    }    
    .cpf {
        margin-top: 7px;
    }
`


