// Komponent obsługujący wylogowanie
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const LogoutButton = ({ user, value, title, to, icon, selected, setSelected, setLogin, setAccess }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const logoutHandler = () => {
        setSelected(title);
        setLogin(null);
        setAccess(null);
    };

    return (  
        <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center" }}
        >
            <Typography 
                variant="h4"
                color={colors.blueAccent[400]}
                sx={{ m: "5px 15px 5px 20px", fontWeight: "bold" }}
            >
                {user && `Zalogowano: ${user}`}
            </Typography>
            <Link to={to} active={(selected === title) ? "true" : "false" } onClick={logoutHandler} >
                <Box width="150px" height="40px" sx={{ 
                    display: "flex", 
                    justifyContent: "space-evenly", 
                    alignItems: "center",
                    backgroundColor: colors.blueAccent[500], 
                    color: colors.primary[100], 
                    fontSize: "20px", 
                    fontWeight: "bold", 
                    padding: "12px 25px",
                    borderRadius: "10px",
                    ":hover": {backgroundColor: colors.grey[700]},
                    ":active": {boxShadow: "9px 8px 13px 4px rgba(27,27,33,0.65) inset" }}}
                >
                    {icon}
                    {value}
                </Box>
            </Link>
        </Box>
    )
}

export default LogoutButton