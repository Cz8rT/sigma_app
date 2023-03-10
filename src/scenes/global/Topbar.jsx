import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Clock from "../../components/Clock";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" p={2}>
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

            {/*Icon Section*/}
            <Box display="flex" marginTop="5px" paddingLeft="10px" >
                <Clock />
                <IconButton onClick={colorMode.toggleColorMode} sx={{mr: "50px"}}>
                    {theme.palette.mode === "dark" 
                        ? (<DarkModeOutlinedIcon/>) 
                        : (<LightModeOutlinedIcon/>) 
                    } 
                </IconButton>
                <IconButton>
                    <ChatOutlinedIcon />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;