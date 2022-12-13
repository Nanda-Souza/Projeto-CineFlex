import styled from "styled-components";
import { useState } from "react";


export default function ReserveSeat(seats){
    const [userName, setUSerName] = useState("")
    const [cpf, setCpf] = useState("")
    
    
    
    function sendReservation(e){
        e.preventDefault()
        const user = {userName: userName, cpf: cpf}
        console.log(user)
        console.log(seats)
    }
    return(
        <form onSubmit={sendReservation}>0
        <InputText> 
            <p className="buy">Nome do comprador:</p>
            <input 
                type="text-name"
                value={userName} 
                onChange={e => setUSerName(e.target.value)}
                placeholder="Digite seu nome..." 
                required
                />

            <p className="cpf">CPF do comprador:</p>
            <input 
                type="text-cpf" 
                value={cpf} 
                onChange={e => setCpf(e.target.value)}
                placeholder="Digite seu cpf..." 
                required
                />
        </InputText>
        <ButtonReserve>
            <p id="button" className="reserve-seats">Reservar assento(s)</p>
        </ButtonReserve>
        </form>
        
    );
}

const ButtonReserve = styled.button`
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    margin-top:57px;
    margin-bottom: 150px;
    align-items: center;
    text-align: center;
    .reserve-seats{
        width: 225px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #E8833A;
        border-radius: 3px;
       
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


