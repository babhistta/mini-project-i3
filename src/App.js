import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { AppBarDrawer } from './components/AppBarDrawer';
import { Task } from './pages/Task';
import { Post } from './pages/Post';
import { User } from './pages/User';
import { theme } from './components/theme';
import '@fontsource/inter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarDrawer />
        <Router>
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/user" element={<User />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
