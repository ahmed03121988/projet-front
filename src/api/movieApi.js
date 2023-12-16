import axios from 'axios';



export const getMovie = async()=>{
    const {data} = await axios.get('https://movieland-wnve.onrender.com/movie/get')
     return data
}

export const singleMovie = async(ID)=>{
    const {data} = await axios.get(`https://movieland-wnve.onrender.com/movie/get/${ID}`)
    return data
}