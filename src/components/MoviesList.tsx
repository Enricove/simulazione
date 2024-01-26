import { Card, Grid } from "@chakra-ui/react"
import { MovieType } from "../types";
import { useLoaderData } from "react-router-dom";
import { getMovies } from "../apiCalls";
export async function HomeLoader() {
        const movies = await getMovies;
        return movies;
    } 

const MoviesList = () => {
    

    const movies = useLoaderData() as MovieType[]
    console

    
    return(
        <Grid>
           {movies.map(m => 
           <Card>
           <img 
           src = {m.id} />
           <div>title: {m.title} year: {m.year} id: {m.id}</div>
          </Card>          
            )}
        </Grid>
    )
}
export default MoviesList;