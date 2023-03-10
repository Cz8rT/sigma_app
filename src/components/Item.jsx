// Komponent elementu w panelach nawigacyjnych
import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "./../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem 
            active={selected === title} 
            style={{color: colors.grey[100]}} 
            onClick={()=> setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

export default Item;