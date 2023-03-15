import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';

const MoveUser = ({ pickedUsers, group, moveUserHandler, numOfStudents }) => {
    
    if(((typeof pickedUsers[0] !== "undefined") && (pickedUsers[0].group === group)) || (numOfStudents >= 21)) {
        return (
            <button className='pickUserButton deactivated moveToGroup' >
                <DoNotDisturbAltOutlinedIcon />
            </button>
        )
    } 
    return (
        <button className='pickUserButton moveToGroup' onClick={() => moveUserHandler(group)} >
            {group}
        </button>
    )
}

export default MoveUser;