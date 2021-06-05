import React, { useState, useEffect } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';
import randomcolor from 'randomcolor';

const QuoteGenerator = () => {
    const color = randomcolor();
    const [quotes, setQuotes] = useState([
        {quote: `Time is gold when I'm watching bold.`, author: `Brevin Manalo`},
        {quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.
        `, author: `Nelson Mandela`},
        {quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.
        `, author: `Steve Jobs`},
        {quote: `If life were predictable it would cease to be life, and be without flavor.`, author: `Eleanor Roosevelt`},
        {quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.
        `, author: `Oprah Winfrey`},
        {quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.
        `, author: `James Cameron`},
        {quote: `Life is what happens when you're busy making other plans.`, author: `John Lennon`},
    ]);
    const generateQuoteIndex = Math.floor(Math.random() * quotes.length);
    return (
        <Box backgroundColor={color}
        minH="100vh"
        padding="150px 400px 10px"
        >
            <Box 
            backgroundColor="white"
            minH="300px"
            padding="50px"
            >
                <Box display="flex"
                flexDirection="column"
                >
                    <Box 
                    display="flex"
                    flexDirection="column">
                        <Text fontSize="3xl" color={color}>{quotes[generateQuoteIndex].quote}</Text>
                        <Text alignSelf="flex-end" fontSize="md" padding="20px" color={color}>-{quotes[generateQuoteIndex].author}</Text>
                    </Box>
                    <Box display="flex"
                    justifyContent="space-between"
                    >
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