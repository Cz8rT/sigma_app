import { Box, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import Header from "../../components/Header";



const Alerts = () => {
    //const theme = useTheme();
    //const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Header title="Powiadomienia" subtitle="Nic Cię nie ominie..."/>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                
            </Box>
        </Box>  
    )
}

export default Alerts;