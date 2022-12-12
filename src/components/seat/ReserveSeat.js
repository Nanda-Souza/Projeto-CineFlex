import styled from "styled-components";

export default function ReserveSeat(){
    return(
        <>
        <InputText> 
            <p class="buy">Nome do comprador:</p>
            <input type="text-name" placeholder="Digite seu nome..." />

            <p class="cpf">CPF do comprador:</p>
            <input type="text-cpf" placeholder="Digite seu cpf..." />
        </InputText>
        <ButtonReserve>
            <p id="button" class="reserve-seats">Reservar assento(s)</p>
        </ButtonReserve>
        </>
        
    );
}

const ButtonReserve = styled.div`
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
        .reser
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


