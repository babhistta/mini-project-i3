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
import { FaPlus } from 'react-icons/fa';
import { MdAddTask } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import DateFnsAdapter from '@date-io/date-fns';
import { styles } from '../components/styles';
import TaskCardPending from '../components/TaskCardPending';
import TaskCardCompleted from '../components/TaskCardCompleted';
import axios from '../api/axios';

const Task = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const date = new Date();
  const [value, setValue] = React.useState(
    new Date(date.toLocaleDateString('en-CA'))
  );
  const [todos, setTodos] = React.useState();
  React.useEffect(() => {
    axios.get(`https://gorest.co.in/public/v1/todos`).then((res) => {
      const responseTasks = res.data.data;
      setTodos(responseTasks);
    });
  }, []);

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
              onClick={handleOpen}
              variant="contained"
              color="info"
              startIcon={<MdAddTask size={20} />}
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
              {todos ? (
                <div>
                  {todos.slice(0, 10).map((todo) => {
                    if (todo.status === 'pending') {
                      return (
                        <TaskCardPending
                          key={todo.id}
                          due_on={todo.due_on}
                          title={todo.title}
                        />
                      );
                    }

                    return <></>;
                  })}
                </div>
              ) : (
                <CircularProgress />
              )}
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
              {todos ? (
                <div>
                  {todos.slice(0, 10).map((todo) => {
                    if (todo.status === 'completed') {
                      return (
                        <TaskCardCompleted
                          key={todo.id}
                          due_on={todo.due_on}
                          title={todo.title}
                        />
                      );
                    }
                    return <></>;
                  })}
                </div>
              ) : (
                <CircularProgress />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Box>
            <MdAddTask size={50} />
          </Box>
          <Typography id="modal-modal-title" variant="h5" fontWeight="600">
            Add Task
          </Typography>
          <Stack spacing={3}>
            <form>
              <TextField
                required
                id="outlined-required"
                label="Input Your Task"
                sx={{ mt: 3 }}
              />
              <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <DateTimePicker
                  label="Date&Time picker"
                  value={value}
                  renderInput={(params) => <TextField required {...params} />}
                />
              </LocalizationProvider>
              <Button
                onClick={handleClose}
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
                startIcon={<FaPlus size={10} />}
                sx={{ width: '100%', ml: 1 }}
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
export default Task;
