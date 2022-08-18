import Movie from './Movie'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList({movieList}) {
     //const [movieList,setMovieList]=useState([...movies])
      const list=[...movieList]; 
    //console.log(list[0].genre)
      //  <Movie key={movie.id} movie={movie}></Movie>
     // console.log(list)

  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center'}}>
      
         {list.map((movie)=>{
      return (<Movie key={movie.id} movie={movie}></Movie>)})}
      

    </div>

  )
}

export default MovieList