import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import Header from "../../components/Header";
import GroupTable from "../../components/GroupTable";
import MoveUser from "../../components/MoveUser";
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';
import RepeatOnOutlinedIcon from '@mui/icons-material/RepeatOnOutlined';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Teams = ({ students, login, access }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // lista studentów aktualnie wybranych
    const [pickedUsers, setPickedUsers] = useState([]);
    
    // zmienna przechowująca aktualny stan pokaż/ukryj przyciski  
    const [toggleMoveButtons, setToggleMoveButtons] = useState(false);

    // Obliczanie liczby studentów każdej z grup
    const studentCounter = () => {
        const numOfStudents = [0, 0, 0, 0, 0, 0];
        students.map((e) => {
           return numOfStudents[e.group - 1]++;
        })
        return numOfStudents;
    }

    const capacityArray = studentCounter();

    const addPickedUser = (e) => {
        if(pickedUsers.length >= 2) {console.log("Lista wybranych użytkowników jest pełna!"); return -1;};
        if(pickedUsers.length === 1 && pickedUsers[0].id === e.id) {console.log("Użytkownik jest już wybrany!"); return -2;};
        setToggleMoveButtons(false);
        setPickedUsers([...pickedUsers, e]);
    }

    // dodawanie wybranego użytkownika do listy wybranych
    const pickUserHandler = (id) => {
        const pick = students.filter((element) => element.id === id );
        addPickedUser(pick[0]);
    }

    // usuwanie wybranego użytkownika z listy wybranych
    const removePickedUserHandler = (id) => {
        const pick = pickedUsers.filter((element) => element.id !== id );
        setToggleMoveButtons(false);
        setPickedUsers(pick);
    }

    // zamiana grup dla wybranych użytkowników
    const switchUsersHandler = () => {
        var tempGroupNr = pickedUsers[0].group;
        pickedUsers[0].group = pickedUsers[1].group;
        pickedUsers[1].group = tempGroupNr;
        setToggleMoveButtons(false);
        setPickedUsers([]);
    }

    // pokaż/ukryj przyciski zmiany grupy
    const toggleMoveButtonsHandler = () => {
        if(toggleMoveButtons) setToggleMoveButtons(false);
        else setToggleMoveButtons(true);
    }

    // zamiana grupy dla pojedynczego wybranego użytkownika
    const moveUserHandler = (group) => {
        pickedUsers[0].group = group;
        setToggleMoveButtons(false);
        setPickedUsers([]);
    }


    // Funkcja zwracająca elementy listy wybranych użytkowników
    const listPickedUsers = (list) => {
        var counter = 0;

        return (
            <ul className="pickedUserList">
                {list && list.map((user) => {
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
                            <button className="pickUserButton removeUserButton" onClick={() => removePickedUserHandler(user.id)} ><PersonRemoveAlt1OutlinedIcon /></button>
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
                        
                        { toggleMoveButtons ? ((typeof pickedUsers[0] !== "undefined") && (typeof pickedUsers[1] === "undefined") && (login)
                            ? (<Box className="animateButtons"><Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
                            <MoveUser pickedUsers={pickedUsers} group={1} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[0]} />
                            <MoveUser pickedUsers={pickedUsers} group={2} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[1]} />
                            <MoveUser pickedUsers={pickedUsers} group={3} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[2]} />
                            <MoveUser pickedUsers={pickedUsers} group={4} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[3]} />
                            <MoveUser pickedUsers={pickedUsers} group={5} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[4]} />
                            <MoveUser pickedUsers={pickedUsers} group={6} moveUserHandler={moveUserHandler} numOfStudents={capacityArray[5]} />
                        </Box></Box>) : null  ) : null }
                        
                        
                    </Box>
                    <Box>
                        { login ? ( 
                            (typeof pickedUsers[0] !== "undefined") && (typeof pickedUsers[1] !== "undefined")
                            ? 
                            <button className='pickUserButton switchUsers' onClick={() => switchUsersHandler()}>
                                <RepeatOnOutlinedIcon />
                            </button>
                            :
                            <button className='pickUserButton switchUsers deactivated' >
                                <DoNotDisturbAltOutlinedIcon />
                            </button>
                        ) : null }
                        { login ? ( 
                            (typeof pickedUsers[0] !== "undefined") && (typeof pickedUsers[1] === "undefined")
                            ? (
                                (toggleMoveButtons) ? (
                                    <button className='pickUserButton moveUser removeUserButton' onClick={() => toggleMoveButtonsHandler()}>
                                        <VisibilityOffOutlinedIcon />
                                    </button>) 
                                : (
                                    <button className='pickUserButton moveUser' onClick={() => toggleMoveButtonsHandler()}>
                                        <VisibilityOutlinedIcon />
                                    </button>)
                                )
                            :
                            <button className='pickUserButton deactivated moveUser' >
                                <DoNotDisturbAltOutlinedIcon />
                            </button>
                        ) : null }
                    </Box>
                </Box>
            </Box>
            
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                <GroupTable 
                    groupName="Grupa 1"
                    group={1}
                    students={students}
                    pickedUsers={pickedUsers}
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
                <GroupTable 
                    groupName="Grupa 2"
                    group={2}
                    students={students}
                    pickedUsers={pickedUsers} 
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
                <GroupTable 
                    groupName="Grupa 3"
                    group={3}
                    students={students}
                    pickedUsers={pickedUsers}
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
                <GroupTable 
                    groupName="Grupa 4"
                    group={4}
                    students={students}
                    pickedUsers={pickedUsers}
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
                <GroupTable 
                    groupName="Grupa 5"
                    group={5}
                    students={students}
                    pickedUsers={pickedUsers}
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
                <GroupTable 
                    groupName="Grupa 6"
                    group={6}
                    students={students}
                    pickedUsers={pickedUsers}
                    pickUserHandler={pickUserHandler}
                    removePickedUserHandler={removePickedUserHandler}
                    login={login}
                    access={access}
                />
            </Box>
        </Box>  
    )
}

export default Teams;