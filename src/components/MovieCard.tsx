import { Card } from "@chakra-ui/react";
import { MovieType } from "../types";

const MovieCard = (props: MovieType) => {
    return(
        <Card>
            <img 
            src = {props.id} />
            <div>title: {props.title} year: {props.year} id: {props.id}</div>
           </Card>
    )
}

export default MovieCard;