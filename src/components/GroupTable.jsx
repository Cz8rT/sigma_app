import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const GroupTable = ({group, data, color}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        { field: "id", headerName: "ID" }, 
        { 
            field: "name", 
            headerName: "Użytkownik", 
            flex: 1, 
            cellClassName: "name-column--cell"
        },
        { 
            field: "access", 
            headerName: "Status",
            renderCell: ({ row: { access }}) => {
                return (
                    <Box
                        width="100%"
                        margin="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                            ? colors.greenAccent[600]
                            : colors.redAccent[500]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                        {access === "manager" && <SecurityOutlinedIcon /> }
                        {access === "user" && <LockOpenOutlinedIcon /> }
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ];

    return <Box marginBottom="30px">
                <Typography 
                    variant="h2" 
                    color={colors.grey[100]} 
                    fontWeight="bold" 
                    sx={{marginBottom: "5px"}} 
                >
                    {group}
                </Typography>
                <Box
                    m="5px 0 0 0"
                    height="65vh"
                    sx={{ 
                        "& .MuiDataGrid-root": {
                        border: "none",
                        width: "450px"
                        },
                        "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                        },
                        "& .MuiDataGrid-columnHeaders": {
                        borderBottom: "none",
                        backgroundColor: colors.blueAccent[300]
                        },
                        "& .name-column--cell": {
                        color: colors.grey[100]
                        },
                        "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                        },
                        "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[300]
                        }
                    }}
                >
                <DataGrid 
                    rows={data}
                    columns={columns}
                />
            </Box>
        </Box>
} 

export default GroupTable;