import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from "./../../components/StatBox";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ButtonLink from "../../components/ButtonLink";

const HomePage = ({ selected, setSelected, students }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Obliczanie liczby studentów każdej z grup
    const studentCounter = () => {
        const numOfStudents = [0, 0, 0, 0, 0, 0];
        students.map((e) => {
           return numOfStudents[e.group - 1]++;
        })
        return numOfStudents;
    }

    const capacityArray = studentCounter();

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
                    capacity={capacityArray[0]}
                />
                <StatBox 
                    title="Grupa 2"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={capacityArray[1]}
                />
                <StatBox 
                    title="Grupa 3"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={capacityArray[2]}
                />
                <StatBox 
                    title="Grupa 4" 
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={capacityArray[3]}
                />
                <StatBox 
                    title="Grupa 5" 
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={capacityArray[4]}
                />
                <StatBox 
                    title="Grupa 6"
                    icon={<Diversity3Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}/>} 
                    capacity={capacityArray[5]}
                />
            </Box>

            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px"}} >
                <ButtonLink 
                    value="Do zespołów"
                    title="Zespoły"
                    to="/teams"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}>
                </ButtonLink>
            </Box>
        </Box>  
    )
}

export default HomePage;