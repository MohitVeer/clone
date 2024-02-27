import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios';


function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    // console.log(movies);


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='scrollable-container'>
        {movies.map(
            (movie) => 
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (
                <>
                <div className='scrollable-item'>
                 <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} alt={movie.name}/>
                 <h4 className='movie_name'>{movie?.title || movie?.original_title || movie?.name}</h4>
                </div>    
                </>
            ) 
            
        )}
        </div>
    </div>
  );
}

export default Row