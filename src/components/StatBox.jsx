import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import CapacityCircle from './CapacityCircle';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import { height } from '@mui/system';

const StatBox = ({ title, icon, capacity }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Zapełnienie grupy (max 21 osób) wyrażone jako ułamek 
    const angle = (capacity / 21);

    return (
        <Box
            width="450px"
            height="220px"
            backgroundColor={colors.primary[400]}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="10px"
            marginTop="30px"
            marginLeft="30px"
        >
       <Box width="100%" m="0 30px" display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
                <Box display="flex" justifyContent="flex-start" alignItems="center">
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100]}} marginLeft="10px">
                        {title}
                    </Typography>
                </Box>
                {/* Gdy zapełnienie grupy osiągnie maximum */}
                {((angle >= 1)) && 
                   <Box display="flex" justifyContent="center" alignItems="center" marginTop="30px">
                        <NewReleasesOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "40px"}}/>
                        <Typography variant="h5" fontWeight="bold" sx={{ color: colors.redAccent[500]}} marginLeft="10px">
                            Grupa jest pełna!
                    </Typography>
                   </Box> 
                }
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="space-between">
                <CapacityCircle capacity={angle} />
                <Typography variant="h5" fontWeight="bold" marginTop="20px" sx={{ color: colors.blueAccent[300]}}>
                    Aktualny stan: {capacity}/21
                </Typography>
            </Box>
        </Box>
    </Box>
    )
}

export default StatBox;