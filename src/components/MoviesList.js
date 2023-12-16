
import React from 'react'
import MovieCard from "./MovieCard"
const MoviesList = ({movies}) => {
  return (   
<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around" , marginTop:"3rem"}}>
  
  {movies.map((item,index)=>{

    return <MovieCard key={index} movie={item} />
    
  })}

  
</div>

  )
}

export default MoviesList

  