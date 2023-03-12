import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Clock from "../../components/Clock";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

const Topbar = ( { selected, setSelected, login, setLogin }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" p={2}>
            {/*Search Bar*/}
            <Box 
                display="flex" 
                backgroundColor={colors.primary[400]} 
                borderRadius="3px"
                marginLeft="10px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Szukaj użytkownika" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* Login Section */}
            {login === null ? 
                (<LoginButton
                    value="Logowanie"
                    title="Logowanie"
                    to="/login"
                    icon={<LoginOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected} 
                />) 
                : 
                (<LogoutButton
                    user={login}
                    value="Wyloguj"
                    title="Wylogowanie"
                    to="/"
                    icon={<LogoutOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    setLogin={setLogin}
                />)
            }
            {/*Icon Section*/}
            <Box display="flex" marginTop="5px" paddingLeft="10px" >
                <Clock />
                <IconButton onClick={colorMode.toggleColorMode} sx={{mr: "50px"}}>
                    {theme.palette.mode === "dark" 
                        ? (<DarkModeOutlinedIcon/>) 
                        : (<LightModeOutlinedIcon/>) 
                    } 
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;