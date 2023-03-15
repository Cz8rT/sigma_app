import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import Header from "../../components/Header";
import GroupTable from "../../components/GroupTable";
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';
import RepeatOnOutlinedIcon from '@mui/icons-material/RepeatOnOutlined';

const Teams = ({ students, login }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // lista studentów aktualnie wybranych
    const [pickedUsers, setPickedUsers ] = useState([]);

    const addPickedUser = (e) => {
        setPickedUsers(pickedUsers.concat(e));
    }

    // dodawanie wybranego użytkownika do listy wybranych
    const pickUserHandler = (id) => {
        const pick = students.filter((element) => element.id === id );
        addPickedUser(pick);
    }

    // usuwanie wybranego użytkownika z listy wybranych
    const removePickedUserHandler = (id) => {
        const pick = pickedUsers.filter((element) => element.id !== id );
        setPickedUsers(pick);
    }

    // zamiana grup dla wybranych użytkowników
    const switchUsersHandler = () => {
        var tempGroupNr = pickedUsers[0].group;
        pickedUsers[0].group = pickedUsers[1].group;
        pickedUsers[1].group = tempGroupNr;
        setPickedUsers([]);
    }

    // Funkcja zwracająca elementy listy wybranych użytkowników
    const listPickedUsers = (list) => {
        var counter = 0;

        return (
            <ul className="pickedUserList">
                {list.map((user) => {
                    counter+=1;
                    if(counter > 2) return null;
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
                            <button className="pickUserButton" onClick={() => removePickedUserHandler(user.id)} ><PersonRemoveAlt1OutlinedIcon /></button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Header title="Zespoły" subtitle="Aktualny podział na grupy"/>
            </Box>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                m: "40px 20px"}}
            >
                <Typography 
                    variant="h4" 
                    color={colors.blueAccent[300]} 
                    fontWeight="bold" 
                    sx={{marginBottom: "10px", marginRight: login ? "100px" : "20px" }} 
                >
                    Wybrani użytkownicy
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }} >
                    <Box id="pickedUserContainer" sx={{ backgroundColor: colors.primary[400] }}>
                        {listPickedUsers(pickedUsers)}
                    </Box>
                    { login ? (
                    <button className='pickUserButton' onClick={() => switchUsersHandler()}>
                        <RepeatOnOutlinedIcon />
                    </button> 
                    ) : null }
                </Box>
            </Box>
            
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                <GroupTable 
                    groupName="Grupa 1"
                    group={1}
                    students={students}
                    pickUserHandler={pickUserHandler}
                />
                <GroupTable 
                    groupName="Grupa 2"
                    group={2}
                    students={students} 
                    pickUserHandler={pickUserHandler}
                />
                <GroupTable 
                    groupName="Grupa 3"
                    group={3}
                    students={students}
                    pickUserHandler={pickUserHandler}
                />
                <GroupTable 
                    groupName="Grupa 4"
                    group={4}
                    students={students}
                    pickUserHandler={pickUserHandler}
                />
                <GroupTable 
                    groupName="Grupa 5"
                    group={5}
                    students={students} 
                    pickUserHandler={pickUserHandler}
                />
                <GroupTable 
                    groupName="Grupa 6"
                    group={6}
                    students={students}
                    pickUserHandler={pickUserHandler}
                />
            </Box>
        </Box>  
    )
}

export default Teams;