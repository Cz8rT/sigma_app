import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return <Box sx={{marginBottom: "20px"}}>
        <Typography 
            variant="h2" 
            color={colors.grey[100]} 
            fontWeight="bold" 
            sx={{marginBottom: "5px"}} 
        >
            {title}
        </Typography>
        <Typography 
            variant="h5" 
            color={colors.greenAccent[400]} 
            sx={{marginBottom: "5px"}} 
        >
            {subtitle}
        </Typography>
    </Box>
} 

export default Header;