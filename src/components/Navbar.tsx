import React from 'react';
import { Button, ButtonGroup, Box } from "@chakra-ui/react"

const Navbar = ({setPage}:{setPage:any}) => {
return(
    <Box 
   >
        <Button   bg='yellow' borderRadius="20px"  onClick={() => setPage('planets')}> Planetas</Button>
        <Button   onClick={() => setPage('people')}>Pessoas</Button>
  
    </Box>
)

}

export default Navbar