import styled from "styled-components";

export default function SeatStatus(){
    return(
        <>
        <AvailableSeats>         
            <li className="number"></li>
            <li className="number-green"></li>
            <li className="number-yellow"></li>        
        </AvailableSeats>

        <AvailableSeats>         
            <li className="seats">Selecionado</li>
            <li className="seats">Disponível</li>
            <li className="seats">Indisponível</li>        
        </AvailableSeats>
        </>
    );
}

const AvailableSeats = styled.ul`    
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    margin-top: 18px;
    .number {
        display:flex;
        align-items: center;
        margin-left: 7px;
        justify-content: center;
        border: 1px solid #808F9D;
        background-color: #C3CFD9;
        font-size: 11px;
        border-radius: 17px;
        width: 26px;
        height: 26px;
        margin-bottom: 18px;
    }
    .number-green {
        display:flex;
        align-items: center;
        margin-left: 7px;
        justify-content: center;
        border: 1px solid #0E7D71;
        background-color: #1AAE9E;
        font-size: 11px;
        border-radius: 17px;
        width: 26px;
        height: 26px;
    }
    .number-yellow {
        display:flex;
        align-items: center;
        margin-left: 7px;
        justify-content: center;
        border: 1px solid #F7C52B;
        background-color: #FBE192;
        font-size: 11px;
        border-radius: 17px;
        width: 26px;
        height: 26px;
    }
  
`

