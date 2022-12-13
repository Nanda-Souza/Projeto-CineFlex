import styled from "styled-components";

export default function Fotter({title, posterURL, weekday, hour}){
    return(
        <MovieFotter>
            <div>
                <img src={posterURL}/>
            </div> 
            <div>                        
                <p>{title}</p>
                {weekday && (
                    <p>{weekday} - {hour}</p>
                )}
            </div>            
            
        
        </MovieFotter>
    );
}

const MovieFotter = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
width: 375px;
height: 117px;
background-color: #DFE6ED;
border-top: 1px solid #9EADBA;
position: fixed;
bottom: 0;
div {
    flex-wrap: wrap;
    display: flex;    
    align-items: center;
    img {
    width: 48px;
    height: 72px;
    margin-left: 18px;    
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

 