import { useRef, useState, useEffect } from "react";
// import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import Header from "../../components/Header";
// import AuthContext from "../../context/AuthProvider";
import tajneHasla from "./../../data/tajneHasla";

const Login = ({ setLogin, setAccess }) => {

    // const { setAuth } = useContext(AuthContext);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [ user, pwd ])

    useEffect(() => {
        if(success) { setSuccess(false); navigate("/"); }
    }, [ success, navigate ] )

    // --------------------- Prymitywna walidacja użytkownika ----------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        for(var i = 0; i < tajneHasla.length; i++) {
            if(tajneHasla[i].username === user && tajneHasla[i].username === pwd){
                setLogin(user);
                setAccess(tajneHasla[i].access);
                setSuccess(true);
                setErrMsg('');
            }
        }
        setErrMsg("Podano błędny login lub hasło!");
    }

    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Header title="Logowanie" subtitle="Zaloguj się do serwisu"/>
            </Box>
            <Box sx={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", 
                alignItems: "space-evenly",
                backgroundColor: colors.blueAccent[400],
                width: "400px",
                padding: "40px",
                fontSize: "20px",
                borderRadius: "10px"
                }}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <label htmlFor="username" style={{marginRight: "11px"}} >Login</label>
                        <input 
                            type="text" 
                            id="username" 
                            ref={userRef} 
                            autoComplete="off" 
                            onChange={(e)=> setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </Box>
                    <Box>
                        <label htmlFor="password" style={{marginRight: "10px"}} >Hasło</label>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e)=> setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </Box>
                    <button id="loginSubmitButton">Zaloguj</button>
                </form>
                <p ref={errRef} style={{color: colors.redAccent[600]}} >{errMsg}</p>
            </Box>
        </Box>  
    )
}

export default Login;