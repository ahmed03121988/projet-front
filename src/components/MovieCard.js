import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import {useNavigate} from "react-router-dom"

const MovieCard = ({movie}) => {
  console.log(movie);
  const navigate = useNavigate();

  const handelNavigate = ()=>{

    navigate(`/player/${movie._id}`)
  }
  return (
    <div style={{marginTop:"3rem"}}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://movieland-wnve.onrender.com/public/${movie.image}`}  height="250px"/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.discription}
        </Card.Text>
        <Button variant="primary" onClick={()=>handelNavigate()}>Watch it</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard