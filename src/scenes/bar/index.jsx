import { Box } from "@mui/system";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = ({ students }) => {

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Header title="Wykres słupkowy" subtitle="Zróżnicowanie poszczególnych grup"/>
            </Box>
            <Box height={ "75vh" }>
                <BarChart students={students} />
            </Box> 
        </Box>  
    )
}

export default Bar;