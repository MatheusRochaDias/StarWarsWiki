import React from 'react';
import {Box, Flex, Button, Text} from '@chakra-ui/react'


const Planet = ({ planet }) => {
  return (
    <Box p="20px" className="card">
      <Text>{ planet.name }</Text>
      <Text>População - { planet.population }</Text>
      <Text>Terreno - { planet.terrain }</Text>
    </Box>
  );
}
 
export default Planet;