import React from "react";
import {Box, Flex} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Planet from '../components/Planet'
const queryClient = new QueryClient()


const fetchPlanets = async() =>{
    const res = await fetch ('http://swapi.dev/api/planets/')
    return res.json();  
}

const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);
  
    return (
      <div>
        <h2>Planetas</h2>
  
        {status === 'loading' && (
          <div>Loading data</div>
        )}
  
        {status === 'error' && (
          <div>Error fetching data</div>
        )}
  
        {status === 'success' && (
          <div>
            { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
          </div>
        )} 
      </div>
    );
  }
   
  export default Planets;