import React, { useEffect, useState } from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Clock = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return <Box>
        <Typography 
            variant="h3" 
            color={colors.grey[400]} 
            fontWeight="bold" 
            sx={{margin: "5px 40px 0 0"}} 
        >
            {value.toLocaleTimeString()}
        </Typography>    
    </Box>
} 

export default Clock;