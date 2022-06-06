import * as React from 'react';
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Chip,
  Modal,
  Stack,
  CircularProgress,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { styles } from '../components/styles';

const Login = () => {
  return (
    <Box sx={styles.bgLogin}>
      <Box sx={styles.formLogin}>
        <Typography id="modal-modal-title" variant="h5" fontWeight="700">
          LOGIN
        </Typography>
        <form>
          <Stack spacing={3}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              sx={{ mt: 3 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              sx={{ mt: 3 }}
            />
            <Box display="flex">
              <Button
                variant="outlined"
                color="error"
                sx={{ width: '100%', mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="info"
                type="submit"
                sx={{ width: '100%', ml: 1 }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
export default Login;
