import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState } from "react";


export default function SeatList({seats}){  
    const [selected, setSelected] = useState([]);

    function selectSeat(isAvailable){
        if (isAvailable) {
            alert("Assento Disponivel")
        } else {
            alert("Esse assento não está disponível")
        }

    }

    return(
        <SelectSeat>            
            {seats?.map((seats) => (                
                <li key={seats.id} 
                className={`${seats.isAvailable ? "" : "number-yellow"}`}                
                onClick={() => selectSeat(seats.isAvailable)}>                    
                    {seats.name}
                </li>
            ))}            
        </SelectSeat> 
    );
}




const SelectSeat = styled.ul`
width: 100%;
height: 100%;
background-color: #FFFFFF;
display:flex;
flex-wrap: wrap;
margin-left: 12px;
margin-bottom: 18px;
li {
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
}`