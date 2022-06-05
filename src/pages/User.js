import React from 'react';
import { Box, Typography, Toolbar, Grid, Container } from '@mui/material';
import { styles } from '../components/styles';

export const User = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={styles.titlePage}>
              <Typography variant="h5" color="initial" fontWeight={600}>
                User Table
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
