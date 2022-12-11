import styled from "styled-components";

export default function SessionList(){
    return(
        <SelectSession>
            <p>Quinta-feira - 24/06/2021</p>
            <div>
                <p>15:00</p>
                <p>19:00</p>
            </div>
        </SelectSession>                
        
    );
}

const SelectSession = styled.div`
width: 100%;
height: 100%;
background-color: #FFFFFF;
p {
    margin-left: 24px;
    margin-bottom: 22px;
    font-size: 20px;
}
div {
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