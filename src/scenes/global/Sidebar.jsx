import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css' ;
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { styled } from '@mui/material/styles';
import Item from "./../../components/Item";
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import sigma from "./../../assets/images/sigma.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

// Stylowanie avatara
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      height: '25%',
      width: '25%',
      borderRadius: '70%',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        borderRadius: '60%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
        },
            '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Sidebar = ({ selected, setSelected, login }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo i menu */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box 
                                display="flex" 
                                justifyContent="space-between" 
                                alignItems="center" 
                                ml="15px"
                            >
                                <Typography 
                                    variant="h5"
                                    color={colors.blueAccent[300]}
                                >
                                    Panel SIGMA
                                </Typography>
                                <IconButton>
                                    <ArrowBackOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{ m: "10px 0 40px 20%"}}
                    >
                        <Avatar alt="Sigma logo" src={sigma} sx={{ height: "50px", width: "50px" }}/>
                    </StyledBadge>
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Strona główna"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography 
                            variant="h6"
                            color={colors.blueAccent[200]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Strony
                        </Typography>
                        <Item
                            title="Zespoły"
                            to="/teams"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Chat"
                            to="/chat"
                            icon={<ChatOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Powiadomienia"
                            to="/alerts"
                            icon={<NotificationsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Profil"
                            to="/profile"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography 
                            variant="h6"
                            color={colors.blueAccent[200]}
                            sx={{ m: "15px 0 5px 10px" }}
                        >
                            Statystyki
                        </Typography>
                        <Item
                            title="Słupki"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Ciastko"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;