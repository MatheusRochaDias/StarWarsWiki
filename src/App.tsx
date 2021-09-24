import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Box, Flex, Button} from '@chakra-ui/react'
import Planets from './components/Planets'
import People from './components/People'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



function App() {

  const queryClient = new QueryClient()
const[page, setPage] = useState('planets');


  return (
   < QueryClientProvider client={queryClient}>
   
    <Box 
    bg='#222'
    color='#ddd'
    width='full'
    textAlign='center'
    fontFamily= 'sans-serif'>
     
      <h1>Informações sobre Star Wars</h1>
      <Navbar setPage = {setPage}/>
      <Box >
      {page === 'planets' ? <Planets/> : <People/>}
      </Box>
      </Box>
</QueryClientProvider>
);
}

export default App;
