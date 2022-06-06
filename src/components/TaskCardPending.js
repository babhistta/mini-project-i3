import * as React from 'react';
import {
  Typography,
  Box,
  Paper,
  Button,
  Modal,
  Stack,
  TextField,
} from '@mui/material';
import { FaCalendar, FaClock, FaCheck, FaTrash } from 'react-icons/fa';
import { styles } from './styles';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import DateFnsAdapter from '@date-io/date-fns';
import { MdAddTask } from 'react-icons/md';
import axios from '../api/axios';

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
}

function formatTime(string) {
  var options = { hour: 'numeric', minute: 'numeric' };
  return new Date(string).toLocaleTimeString([], options);
}

const TaskCardPending = ({ id, status, due_on, title, updateForm }) => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title2, setTitle] = React.useState();
  const [dueOn, setDueOn] = React.useState();

  const date = new Date();
  const [value, setValue] = React.useState(
    new Date(date.toLocaleDateString('en-CA'))
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const update = () => {
    axios
      .put(
        `https://gorest.co.in/public/v1/todos/${id}`,
        {
          status: 'completed',
        },
        {
          headers: {
            Authorization: `Bearer aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
        console.log(res);
      });
  };

  const deleteTask = () => {
    axios
      .delete(`https://gorest.co.in/public/v1/todos/${id}`, {
        headers: {
          Authorization: `Bearer aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1`,
        },
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      });
  };

  return (
    <Paper style={styles.cardTask}>
      {title}
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
            <Typography variant="caption">{formatDate(due_on)}</Typography>
            <Box mr={1} ml={2}>
              <FaClock size={10} />
            </Box>
            <Typography variant="caption">{formatTime(due_on)}</Typography>
          </Box>
        </Button>
        <Box>
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={updateForm}
            disableElevation
            style={styles.circleIconButton}
          >
            <FaEdit size={14} />
          </Button> */}
          <Button
            variant="contained"
            color="error"
            disableElevation
            onClick={deleteTask}
            style={styles.circleIconButton}
          >
            <FaTrash size={14} />
          </Button>
          <Button
            variant="outlined"
            color="info"
            disableElevation
            onClick={update}
            style={styles.circleIconButton}
          >
            <FaCheck size={14} />
          </Button>
        </Box>
      </Box>
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
                value={title2}
                onChange={(e) => setTitle(e.target.value)}
              />
              <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <DateTimePicker
                  label="Date&Time picker"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      value={dueOn}
                      onChange={(e) => setDueOn(e.target.value)}
                      required
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <Box display="flex" justifyContent="space-between">
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
                  sx={{ width: '100%', ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Stack>
        </Box>
      </Modal>
    </Paper>
  );
};

export default TaskCardPending;
