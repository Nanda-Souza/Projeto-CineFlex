import styled from "styled-components";

export default function SubHeader({text, placeOrder}){
    return(
        <SelectMovie> 
        <p
            className={`${placeOrder ? "select-request " : ""}`}>                
                {text}</p>
        </SelectMovie>        
        
    );
}

const SelectMovie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110px;
    font-size: 24px;
    color: #293845;
    margin-top: 67px;
    background-color: #FFFFFF;
    letter-spacing: 0.04em;
    .select-request {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height:28px ;
        color: #247A6B;
        width: 170px;
        letter-spacing: 0.04em;
        font-weight: bold
       }       
`


