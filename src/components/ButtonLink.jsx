// Komponent będący linkiem do nawigacji
import { Box, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const ButtonLink = ({ value, title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Link to={to} active={(selected === title) ? "true" : "false" } onClick={()=> setSelected(title)} >
            <Box width="200px" sx={{ 
                display: "flex", 
                justifyContent: "space-evenly", 
                alignItems: "center",
                backgroundColor: colors.redAccent[600], 
                color: colors.primary[100], 
                fontSize: "20px", 
                fontWeight: "bold", 
                padding: "12px 25px",
                borderRadius: "10px",
                ":hover": {backgroundColor: colors.grey[700]},
                ":active": {boxShadow: "9px 8px 13px 4px rgba(27,27,33,0.65) inset" }}
                }
            >
                {icon}
                {value}
            </Box>
        </Link>
    )
}

export default ButtonLink