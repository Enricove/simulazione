import axios from "axios";

export const getMovies = async () => {
    
    const response = await axios.get("http://www.omdbapi.com/?apikey=efc30d58&s=indiana+jones")
    console.log(response);
    return response.data.Search;
    
}

export const getDetailsMovie = async (id:string) => {
    const response = await axios.get("http://www.omdbapi.com/?apikey=efc30d58&i="+id)
    return response.data.Search;
}