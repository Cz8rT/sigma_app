import { Box, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import { mockDataTeams, mockDataContacts, mockDataInvoices } from "./../../data/mockData.js";
import Header from "../../components/Header";
import GroupTable from "../../components/GroupTable";


const Teams = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Header title="Zespoły" subtitle="Aktualny podział na grupy"/>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                <GroupTable group="Grupa 1" data={mockDataTeams} color={colors.blueAccent[300]} />
                <GroupTable group="Grupa 2" data={mockDataContacts} color={colors.blueAccent[300]} />
                <GroupTable group="Grupa 3" data={mockDataInvoices} color={colors.blueAccent[300]} />
                <GroupTable group="Grupa 4" data={mockDataTeams} color={colors.blueAccent[300]} />
                <GroupTable group="Grupa 5" data={mockDataInvoices} color={colors.blueAccent[300]} />
                <GroupTable group="Grupa 6" data={mockDataContacts} color={colors.blueAccent[300]} />
            </Box>
        </Box>  
    )
}

export default Teams;