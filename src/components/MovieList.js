import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList(){
    const [movies, setMovies] = useState(undefined);
  
    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(URL);
        promise.then((res) => setMovies(res.data));
        //promise.then(res => console.log(res.data))
      }, []);     

      if (movies === undefined) {
        return(
            <MoviesSpace>
                <p>Carregando...</p>
            </MoviesSpace>
        )
      }
      
    

    return(
        <MoviesSpace>         
        {movies?.map((movies) => (
            <img key={movies.id} src={movies.posterURL} />
        ))}
        
        </MoviesSpace>
    );
}

const MoviesSpace = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #FFFFFF;
img {
    width: 129x;
    height: 190px;
    padding: 8px;
    margin-top: 11px;
    margin-left: 12px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}
`

  
  

