import React, { useState } from 'react';
import { Box, Text, Button } from "@chakra-ui/react";

const NumberIterator = () => {
    const [number, setNumber] = useState(0);
    const handleClick = () => setNumber(number + 1);
    return (
        <Box backgroundColor="#B2D8D8"
        minH="100vh"
        minW="100vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
            <Box 
            backgroundColor="white" 
            maxW="50vw" 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            borderRadius="10px"
            padding="1.5%"
            >
                <Box>
                    <Text color="#319795" fontSize="7xl">Number Iterator!</Text>
                </Box>
                <Box>
                    <Text color="#319795" fontSize="6xl">{number}</Text>
                </Box>
                <Box>
                    <Button variant="outline" colorScheme="teal" onClick={handleClick}>Add 1!</Button>
                </Box>
            </Box>
        </Box>
    );
}
 
export default NumberIterator;