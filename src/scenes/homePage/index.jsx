import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from "./../../components/StatBox";
import Diversity3Icon from '@mui/icons-material/Diversity3';

const HomePage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Header title="SIGMA app" subtitle="Aktualny stan zapełnienia grup"/>
            </Box>

            <Box 
                display="flex" 
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
                marginTop="10px"
                marginLeft="30px"
            >
                <StatBox 
                    title="Grupa 1" 
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={11}
                />
                <StatBox 
                    title="Grupa 2"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={21}
                />
                <StatBox 
                    title="Grupa 3"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={3}
                />
                <StatBox 
                    title="Grupa 4" 
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={10}
                />
                <StatBox 
                    title="Grupa 5" 
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={12}
                />
                <StatBox 
                    title="Grupa 6"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={13}
                />
            </Box>

            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px"}} >
                <Button sx={{ 
                    backgroundColor: colors.redAccent[600], 
                    color: colors.primary[100], 
                    fontSize: "20px", 
                    fontWeight: "bold", 
                    padding: "12px 25px",
                    ":hover": {backgroundColor: colors.grey[700]}
                }}
                >
                    <PeopleOutlinedIcon sx={{ mr: "10px" }} />
                    Do zespołów
                </Button>
            </Box>

        </Box>  
    )
}

export default HomePage;