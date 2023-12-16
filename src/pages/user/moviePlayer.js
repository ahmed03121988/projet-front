import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-router-dom"
import {useParams , useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {singleMovie} from "../../api/movieApi"
const MoviePlayer = () => {
    const {id} = useParams();
    const navigate = useNavigate()
//     const[movie,setMovie] = useState({})

//    console.log('variable movie: ',movie)

//     useEffect(()=>{
//         singleMovie(id.toString())
//         .then((res)=>{
//           setMovie(res.rslt)
//           console.log(res)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     },[id])
    const list = useSelector((state)=>state.movie);
    const currentMovie = list.find((item)=>item._id === id);
    console.log(currentMovie);
  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             
            
           </Nav>
         </Navbar.Collapse>
        
       </Container>
     </Navbar>
       <div style={{display:"flex", justifyContent:"flex-end"}}>
       <button onClick={()=>navigate('/')}> back </button>
       </div>
      <div style={{height:"500px", display:"flex",justifyContent:"space-around"}}> 
       <video controls>
        <source src={`https://movieland-wnve.onrender.com/public/${currentMovie.video}`}/>
       </video>
       <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3>{currentMovie.title}</h3>
        <p>{currentMovie.discription}</p>
         <img src={`https://movieland-wnve.onrender.com/public/${currentMovie.image}`} alt="movie poster" height={400}/>
       
       </div>
       </div>
    </div>
  )
}

export default MoviePlayer