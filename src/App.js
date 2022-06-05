import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppBarDrawer from './components/AppBarDrawer';
import Task from './pages/Task';
import { Login } from './pages/Login';
import { Post } from './pages/Post';
import { User } from './pages/User';
import { theme } from './components/theme';
import '@fontsource/inter';

function Main() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarDrawer />
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Box>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
