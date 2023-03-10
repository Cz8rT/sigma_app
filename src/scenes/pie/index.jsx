import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Header title="Wykres kołowy" subtitle="Liczebność grup"/>
            </Box>
            <Box height={ "75vh" }>
                <PieChart />
            </Box> 
        </Box>  
    )
}

export default Pie;