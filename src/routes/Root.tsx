import { Box } from "@chakra-ui/react";
import Header from "/root/simulazione/src/components/Header.tsx"
import MoviesList from "../components/MoviesList";

const Root = () => {

    return (
        <Box>
            <Header />
            <MoviesList />
         </Box>
      )        
}
export default Root