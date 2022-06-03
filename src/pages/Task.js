import * as React from 'react';
import {
  IconButton,
  Divider,
  Typography,
  Toolbar,
  Box,
  Avatar,
  Container,
  Grid,
  Paper,
  Button,
  Chip,
} from '@mui/material';
import {
  FaPlus,
  FaCalendar,
  FaClock,
  FaCheck,
  FaTrash,
  FaEdit,
  FaReply,
} from 'react-icons/fa';
import { styles } from '../components/styles';

export const Task = () => {
  return (
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
              Task Board
            </Typography>
            <Button
              variant="contained"
              color="info"
              startIcon={<FaPlus size={10} />}
              style={styles.customButton}
            >
              Add Task
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper style={styles.cardTaskParent}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="p" fontWeight="bold">
                  Pending
                  <Chip
                    label="10"
                    size="small"
                    ml="20px"
                    sx={{ marginLeft: 1 }}
                  />
                </Typography>
                <IconButton color="primary">
                  <FaPlus size="15" />
                </IconButton>
              </Box>
              <Paper style={styles.cardTask}>
                Vesica vulpes caput consequuntur antea velum peior.
                <Box
                  mt="16px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Button
                    variant="contained"
                    color="info"
                    disableElevation
                    style={styles.customButton}
                  >
                    <Box display="flex" alignItems="center">
                      <Box mr={1}>
                        <FaCalendar size={10} />
                      </Box>
                      <Typography variant="caption">12 Des 2021</Typography>
                      <Box mr={1} ml={2}>
                        <FaClock size={10} />
                      </Box>
                      <Typography variant="caption">05:00</Typography>
                    </Box>
                  </Button>
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                      style={styles.circleIconButton}
                    >
                      <FaEdit size={14} />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      disableElevation
                      style={styles.circleIconButton}
                    >
                      <FaTrash size={14} />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      disableElevation
                      style={styles.circleIconButton}
                    >
                      <FaCheck size={14} />
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper style={styles.cardTaskParent}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="p" fontWeight="bold">
                  Completed
                  <Chip
                    label="10"
                    size="small"
                    fontWeight="light"
                    sx={{ marginLeft: 1 }}
                  />
                </Typography>
              </Box>
              <Paper style={styles.cardTask}>
                Vesica vulpes caput consequuntur antea velum peior.
                <Box
                  mt="16px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    color="success"
                    disableElevation
                    style={styles.customButton}
                  >
                    <Box display="flex" alignItems="center">
                      <Box mr={1}>
                        <FaCalendar size={10} />
                      </Box>
                      <Typography variant="caption">12 Des 2021</Typography>
                      <Box mr={1} ml={2}>
                        <FaClock size={10} />
                      </Box>
                      <Typography variant="caption">05:00</Typography>
                    </Box>
                  </Button>
                  <Box>
                    <Button
                      variant="contained"
                      color="error"
                      disableElevation
                      style={styles.circleIconButton}
                    >
                      <FaTrash size={14} />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      disableElevation
                      style={styles.circleIconButton}
                    >
                      <FaCheck size={14} />
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={styles.cardTaskParent}>
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{ width: 28, height: 28, marginRight: 1 }}
                  src="/img/avatar-female.png"
                />
                <Typography
                  variant="body2"
                  fontWeight="medium"
                  color="initial"
                  sx={{ marginRight: 1 }}
                >
                  Username
                </Typography>
                <Chip label="10 comments" size="small" />
              </Box>
              <Typography
                variant="h6"
                fontWeight="700"
                color="initial"
                sx={{ marginTop: 2 }}
              >
                Damnatio sonitus vestigium virtus curvus acceptus culpa cumque
                adhuc.
              </Typography>
              <Typography
                variant="body1"
                fontWeight="400"
                color="initial"
                sx={{ marginTop: 1 }}
              >
                Tergo et abundans. Vita infit animadverto. Culpa deripio color.
                Vel vestigium cura. Aut coepi sto. Caste avoco celebrer.
                Vinculum ut utrimque. Conspergo sordeo tumultus. Rerum aqua
                aeternus. Demum abduco vinum. Corpus necessitatibus amissio.
                Tamen tripudio caelum. Architecto ver velum. Sol tyrannus
                vilitas. Trepide laboriosam pariatur. Animi defaeco collum. Quo
                debitis bardus.
              </Typography>
              <Button
                variant="text"
                color="info"
                startIcon={<FaReply size={10} />}
                sx={{
                  marginTop: 1,
                  fontWeight: '700',
                  justifyContent: 'flex-start',
                }}
              >
                Reply
              </Button>
              <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              <Box ml={6} display="flex" alignItems="center">
                <Avatar src="/img/avatar-male.png"></Avatar>
                <Box ml={2}>
                  <Typography variant="body1" fontWeight="700">
                    Username
                  </Typography>
                  <Typography variant="body1" fontWeight="400">
                    Tergo et abundans. Vita infit animadverto. Culpa deripio
                    color. Vel vestigium cura. Aut coepi sto. Caste avoco
                    celebrer. Vinculum ut utrimque. Conspergo sordeo tumultus.
                    Rerum aqua aeternus. Demum abduco vinum.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Task;
