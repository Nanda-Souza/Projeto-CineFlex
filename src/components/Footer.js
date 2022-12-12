import styled from "styled-components";

export default function Fotter({title, posterURL, weekday, hour}){
    return(
        <MovieFotter>
            <div>
                <img src={posterURL}/>
                <p>{title}</p>
                {weekday && (
                    <div>
                        <p>{weekday} - {hour}</p>
                    </div>
                )}            
            </div> 
        
        </MovieFotter>
    );
}

const MovieFotter = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 375px;
height: 117px;
background-color: #DFE6ED;
border-top: 1px solid #9EADBA;
position: fixed;
bottom: 0;
div {
    display: flex;
    align-items: center;
    img {
    width: 48px;
    height: 72px;
    margin-left: 18px;
    margin-top: 14px;
    border-style: outset;
    border: 8px #FFFFFF solid;
    border-radius: 3px;
    }
    p {
        margin-left: 15px;
        font-size: 24px;
        color: #293845;
        width: 266px; 
    }    
}
`

 