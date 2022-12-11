import styled from "styled-components";


export default function SessionList({sessions}){

    return(
        <SelectSession>
            {sessions?.map((sessions) => (
                <li key={sessions.id}>
                    <p>{sessions.weekday} - {sessions.date}</p>                    
                    <ul>
                        {sessions.showtimes?.map((showtimes) => (
                            <li key={showtimes.id}>
                                <p>{showtimes.name}</p>                        
                            </li>
                            
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
p {
    margin-left: 24px;
    margin-bottom: 22px;
    font-size: 20px;
}
ul {
    display: flex;
    margin-left:24px;
    margin-bottom: 23px;
    p {
    width: 82px;
    height: 43px;
    background-color: #E8833A;
    margin-right: 8px; 
    color:#FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    letter-spacing: 0.02em;;
    }
}`