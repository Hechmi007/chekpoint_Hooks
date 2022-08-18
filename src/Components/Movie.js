import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '@mui/material/Rating';
function Movie({movie}) {
const genreList=[movie.genre]
//console.log(movie.genre)
console.log(typeof(movie.rating))

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
          {movie.genre.map((g,index)=>{
          console.log(g)
          return (<ListGroup.Item key={index}>{g}</ListGroup.Item>)
        })}  
        
      </ListGroup> */}
      <ListGroup className="list-group-flush">
      <Rating  name="half-rating-read" value={movie.rating} precision={0.5} readOnly  max={10}/>

      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        
    </div>
  )
}

export default Movie