import { useState } from "react";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom"
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import HomePage from './scenes/homePage';
import Teams from './scenes/teams';
import Chat from './scenes/chat';
import Alerts from './scenes/alerts';
import Profile from './scenes/profile';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Login from './scenes/login';

function App() {
  const [theme, colorMode] = useMode();
  const [selected, setSelected] = useState("Dashboard");
  const [login, setLogin] = useState(null);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar selected={selected} setSelected={setSelected} login={login} />
          <main className='content'>
            <Topbar selected={selected} setSelected={setSelected} login={login} setLogin={setLogin} />
            <Routes>
              <Route path='/' element={<HomePage selected={selected} setSelected={setSelected} />} />
              <Route path='/teams' element={<Teams />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/alerts' element={<Alerts />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
            </Routes>
          </main>  
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
