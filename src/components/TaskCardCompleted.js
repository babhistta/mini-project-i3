import * as React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { FaCalendar, FaClock, FaCheck, FaTrash } from 'react-icons/fa';
import { styles } from './styles';
import axios from '../api/axios';

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
}
function formatTime(string) {
  var options = { hour: 'numeric', minute: 'numeric' };
  return new Date(string).toLocaleTimeString([], options);
}

const TaskCardCompleted = ({ id, status, due_on, title }) => {
  const update = () => {
    axios
      .put(
        `https://gorest.co.in/public/v1/todos/${id}`,
        {
          status: 'pending',
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
          color="success"
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
            variant="contained"
            color="info"
            disableElevation
            onClick={update}
            style={styles.circleIconButton}
          >
            <FaCheck size={14} />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskCardCompleted;
