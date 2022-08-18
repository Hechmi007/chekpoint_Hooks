import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './Components/MovieList';
import data from './data.js';
import  {  useState } from "react";
import AddMovie from './Components/AddMovie';
import  {Filtre}  from './Components/Filter';

function App() {
  const [movies, setMovies]=useState([...data])
  const addMovie=(movie)=>{
    setMovies([...movies,movie])
  }
  
  const [search,setSearch]= useState('')
  const [rate,setRate]= useState(0)

  return (
    <div className="App">

           <AddMovie Add={addMovie}></AddMovie>  
           <Filtre setSearch={setSearch} setRate={setRate}  rate={rate}/>

       <MovieList movieList={movies.filter(el=> el.title.trim().toLowerCase().includes(search.toLowerCase().trim()) && el.rating >= rate)}/> 
      
    </div>
  );
}

export default App;
