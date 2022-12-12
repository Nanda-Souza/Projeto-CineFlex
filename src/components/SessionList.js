import styled from "styled-components";
import { Link } from "react-router-dom"


export default function SessionList({sessions}){

    return(
        <SelectSession>
            {sessions?.map((sessions) => (
                <li key={sessions.id}>
                    <p>{sessions.weekday} - {sessions.date}</p>                    
                    <ul>
                        {sessions.showtimes?.map((showtimes) => (
                            <Link style={{textDecoration: 'none'}} key={showtimes.id} to={`/assentos/${showtimes.id}`}>
                                <li>
                                    <p>{showtimes.name}</p>                        
                                </li>
                            </Link>
                            
                        ))} 
                    </ul>
                </li>
            ))} 
        </SelectSession> 
    );
}


const SelectSession = styled.ul`
width: 100%;
height: 100%;
background-color: #FFFFFF;
margin-bottom:100px;
margin-left:24px;
p {
    margin-left: 10px;
    margin-bottom: 22px;
    font-size: 20px;
}
ul {
    display: flex;
    margin-bottom: 23px;    
    p {
    width: 82px;
    height: 43px;
    font-size: 18px;
    background-color: #E8833A;
    color:#FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    letter-spacing: 0.02em;
    }
}`