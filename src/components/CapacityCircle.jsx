import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const CapacityCircle = ({ capacity = "0.75", size = "100" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = capacity * 360;

    return (
        <Box sx={{ 
            background: `radial-gradient(${colors.primary[400]} 40%, transparent 45%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.grey[200]} ${angle}deg 360deg),
                ${colors.redAccent[600]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
            marginLeft: "20px"     
        }}/>
    )
}

export default CapacityCircle;