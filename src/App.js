// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {movies} from "./movies";
// import Button from "./Button";

function App() {
  // const [counter, setCounter] = React.useState(0);

  // // const counterState = React.useState(0);
  // // const counter = counterState[0];
  // // const setCounter = counterState[1];
  //   const increment = () =>{
  //     //do function logic in here
  //     setCounter(counter + 1);

  //   }
  //   const decrement = () => {
  //     setCounter(counter - 1 );
  //   }


    const[currentMovie, setCurrentMovie] = useState(null);

  return (
    <div>

     <h1>Movie carousel</h1>

    {
      movies.map((movie, index) => {
       //this is where the logic happens
          return(
          <button key={movie.title} onClick={() =>  setCurrentMovie(movie)}> 
          <p>{movie.title}</p>
          
          <img src={movie.posterUrl} height={250}/>
          </button>


          )
      })
    }
      {
        currentMovie ?
        <div>
          <p>{currentMovie.title}</p>
          <p>{currentMovie.description}</p>
          <p>{currentMovie.rating}</p>
          <p>{currentMovie.director}</p>
          <p>{currentMovie.releaseYear}</p>
          <p>{currentMovie.categories.join(",")}</p>
        </div>
        :  <p> Please select a movie for details </p>
      }




              
    </div>
  );
}

export default App;
