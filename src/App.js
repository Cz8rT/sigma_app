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

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/teams' element={<Teams />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/alerts' element={<Alerts />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
            </Routes>
          </main>  
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
