import React from 'react';
import { Box } from '@chakra-ui/react';

const StyledBoxComponent = (props) => {
    return (
        <Box display="flex"
        justifyContent="space-between"
        border="1px solid white"
        backgroundColor="skyblue"
        color="black"
        minH="100px"
        padding="20px"
        fontWeight="bold"
        gridArea={props.gridArea}
        gridColumnStart={props.gridColumnStart}
        gridColumnEnd={props.gridColumnEnd}
        gridRowStart={props.gridRowStart}
        gridRowEnd={props.gridRowEnd}
        gridRow={props.gridRow}
        gridColumn={props.gridColumn}
        >
            <Box fontSize="30px">
                <h1>Grid Item</h1>
            </Box>
            <Box fontSize="30px">
                <h1>{props.ItemNumber}</h1>
            </Box>
        </Box>
    );
}
 
export default StyledBoxComponent;