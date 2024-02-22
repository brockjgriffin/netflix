import React from "react";
import "./MovieRow.css";
import { useState, useEffect } from "react";
import endpoints from "./requests";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
//import { add } from "./userSlice";
import { add } from "./basketSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

function MovieRow({  dataObj ,fetchUrl, title, isLargeRow = false }) {
  const base_url = "https://image.tmbd.org/t/p/original/";
  const [movie, setMovie] = useState([]);
  const [tog, setTog] = useState(false)
  const userr = useSelector(selectUser);

const dispatch = useDispatch()

const addToCart = (mov) => {
  dispatch(add(mov))
  
}

  

  

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="row">

        {movie.map((mov) => (
          <div className="poster">
            <div className="poster-container">
                
              <img
              
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? mov.poster_path : mov.backdrop_path
                }`}
                alt={mov.name}
              />
            
            </div>
             
                
                  
                    <div className="poster-addon">
                    <div className="poster-details">
                      <h3>{mov.title}</h3>
                      <h5>{mov.release_date}</h5>
                    </div>
                    <div className="poster-overview">
                      <h3>{mov.overview}</h3>
                    </div>
                    
                  </div>
                  <div className="poster-footer">
                      {userr ? (
                      <AddIcon onClick={() => addToCart(mov)} className='addIcon' />

                      ): (
                        <AddIcon className="addIcon" />
                      )}
                    </div>
                
             
            
          </div>
          
              ))}
        
      </div>
      
    </div>
  );
}

export default MovieRow;
