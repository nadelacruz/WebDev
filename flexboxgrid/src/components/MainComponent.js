import { Box } from '@chakra-ui/layout';
import React from 'react';
import StyledBoxComponent from './StyledBoxComponent';

const MainComponent = () => {
    return (
        <Box
        padding="30px"
        display="grid"
        gridTemplateColumns="200px 250px"
        gridAutoRows="minmax(150px, auto)"
        gridGap="20px"
        >
            <StyledBoxComponent ItemNumber="1"/>
            <StyledBoxComponent ItemNumber="2"/>
            <StyledBoxComponent ItemNumber="3"/>
            <StyledBoxComponent ItemNumber="4"/>
            <StyledBoxComponent ItemNumber="5"/>
        </Box>
    );
}
 
export default MainComponent;