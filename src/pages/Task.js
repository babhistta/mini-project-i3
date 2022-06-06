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
import { FaPlus, FaTrash } from 'react-icons/fa';
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

  const token =
    'aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1';

  const date = new Date();
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChangeTime = (newValue) => {
    setValue(newValue);
  };

  const [todos, setTodos] = React.useState();
  React.useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const responseTasks = res.data.data;
        setTodos(responseTasks);
      });
  }, []);

  const [myTodos, setMyTodos] = React.useState();
  React.useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/users/19/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const responseTasks = res.data.data;
        setMyTodos(responseTasks);
      });
  }, []);

  const [createdTask, setCreateTask] = React.useState({
    title: 'dwadawd',
    due_on: '',
    status: 'pending',
    user_id: '19',
  });

  const handleChange = (event) => {
    setCreateTask({
      ...createdTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://gorest.co.in/public/v1/todos', createdTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
              My Task
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
                <IconButton color="primary" onClick={handleOpen}>
                  <FaPlus size="15" />
                </IconButton>
              </Box>
              {myTodos ? (
                <div>
                  {myTodos.slice(0, 10).map((todo) => {
                    if (todo.status === 'pending') {
                      return (
                        <TaskCardPending
                          id={todo.id}
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
                <IconButton color="primary">
                  <FaTrash size="15" />
                </IconButton>
              </Box>
              {myTodos ? (
                <div>
                  {myTodos.slice(0, 10).map((todo) => {
                    if (todo.status === 'completed') {
                      return (
                        <TaskCardCompleted
                          id={todo.id}
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={styles.titlePage}>
            <Typography variant="h5" color="initial" fontWeight={600}>
              All Users Task
            </Typography>
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
              </Box>
              {todos ? (
                <div>
                  {todos.slice(0, 8).map((todo) => {
                    if (todo.status === 'pending') {
                      return (
                        <TaskCardPending
                          id={todo.id}
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
                  {todos.slice(0, 8).map((todo) => {
                    if (todo.status === 'completed') {
                      return (
                        <TaskCardCompleted
                          id={todo.id}
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                required
                name="title"
                label="Input Your Task"
                sx={{ mt: 3 }}
                onChange={handleChange}
              />
              <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <DateTimePicker
                  label="Date&Time picker"
                  name="due_on"
                  value={value}
                  onChange={handleChangeTime}
                  renderInput={(params) => (
                    <TextField name="due_on" {...params} />
                  )}
                />
              </LocalizationProvider>
              <Box display="flex">
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
              </Box>
            </Stack>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
export default Task;
