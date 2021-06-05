import React, { useState, useEffect } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';
import { theQuotes } from '../data/QuotesArray';
import randomcolor from 'randomcolor';

const QuoteGenerator = () => {
    const color = randomcolor();
    const [quotes, setQuotes] = useState(theQuotes);
    const generateQuoteIndex = Math.floor(Math.random() * quotes.length);
    return (
        <Box backgroundColor={color} minH="100vh" padding="150px 400px 10px">
            <Box backgroundColor="white" minH="300px"padding="50px">
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="3xl" color={color}>{quotes[generateQuoteIndex].quote}</Text>
                        <Text alignSelf="flex-end" fontSize="md" padding="20px" color={color}>-{quotes[generateQuoteIndex].author}</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Button margin="0px 5px" backgroundColor={color} color="white">Twt</Button>
                            <Button backgroundColor={color} color="white">Tum</Button>
                        </Box>
                        <Button backgroundColor={color} color="white" onClick={() => setQuotes([...quotes])}>Generate</Button>
                    </Box>
                </Box>
            </Box>
      </Box>
    );
}
 
export default QuoteGenerator;