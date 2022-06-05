import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { FaCalendar, FaClock, FaCheck, FaTrash, FaEdit } from 'react-icons/fa';
import { styles } from './styles';

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
}
function formatTime(string) {
  var options = { hour: 'numeric', minute: 'numeric' };
  return new Date(string).toLocaleTimeString([], options);
}

const TaskCardCompleted = ({ id, status, due_on, title }) => {
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
  );
};

export default TaskCardCompleted;
