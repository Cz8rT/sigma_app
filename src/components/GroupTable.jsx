import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const GroupTable = ({groupName, group, students, pickUserHandler }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const listGroup = (list) => {
        var counter = 0;

        return (
            <ul className="userList">
                {list.map((user) => {
                    if(user.group === group){

                        counter+=1;

                        return (
                            <li className="userRow" key={user.id} style={{
                                backgroundColor: colors.primary[400],
                                color: colors.primary[200]
                                }} 
                            >
                                <div>
                                    <span style={{margin: "0 10px"}}>{counter}.</span>
                                    <span style={{margin: "0 30px"}}>{user.name} {user.surname}</span>
                                </div>
                                <button className="pickUserButton" onClick={() => pickUserHandler(user.id)}><PersonAddAltOutlinedIcon /></button>
                            </li>
                        )
                    } else return null;
                })}
            </ul>
        )
    }

    return (
        <Box marginBottom="30px">
            <Typography 
                variant="h2" 
                color={colors.grey[100]} 
                fontWeight="bold" 
                sx={{ marginBottom: "10px" }} 
            >
                {groupName}
            </Typography>
            <Box>
                <div className="userListHeader" style={{
                    backgroundColor: colors.blueAccent[500],
                    color: colors.primary[200]
                    }}
                >
                    <span style={{margin: "0 10px"}}>Nr</span>
                    <span style={{marginRight: "120px"}}>Imię Nazwisko</span>
                    <span style={{margin: "0 50px"}}>Wybierz</span>
                </div>
                {listGroup(students)}
            </Box>
        </Box>
    )
} 

export default GroupTable;