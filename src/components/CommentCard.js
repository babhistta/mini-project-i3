import React from 'react';
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
  TextField,
  Modal,
} from '@mui/material';
import { FaTrash, FaEdit, FaComment } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { styles } from '../components/styles';
import axios from '../api/axios';

const CommentCard = ({ id, name, body }) => {
  const token =
    'aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const deleteComment = () => {
    axios
      .delete(`https://gorest.co.in/public/v1/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const update = () => {
    axios
      .put(`https://gorest.co.in/public/v1/comments/${id}`, createdTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      });
  };
  const [createdTask, setCreateTask] = React.useState({
    name: 'Tino',
    email: 'babhistta@gmail.com',
    body: '',
  });

  const handleChange = (event) => {
    setCreateTask({
      ...createdTask,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      ml={6}
      mb={2}
      display="flex"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Avatar src="/img/avatar-male.png"></Avatar>
      <Box ml={2}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography variant="body1" fontWeight="700">
            {name}
          </Typography>
          <IconButton onClick={handleClick}>
            <BiDotsVerticalRounded size={20} />
          </IconButton>
          <Menu
            sx={{
              mt: '56px',
            }}
            PaperProps={{
              sx: {
                boxShadow:
                  '0px 0px 14px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.06)',
                borderRadius: '10px',
              },
            }}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={deleteComment} color="error">
              <ListItemIcon>
                <FaTrash fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleOpen}>
              <ListItemIcon>
                <FaEdit fontSize="small" />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Typography variant="body1" fontWeight="400">
          {body}
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Box>
            <FaComment size={50} />
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight="600"
            marginBottom="1em"
          >
            Create Post
          </Typography>
          <form onSubmit={update}>
            <Stack spacing={3}>
              <TextField
                name="body"
                label="Input Your Comment"
                multiline
                rows={4}
                maxRows={4}
                fullWidth
                onChange={handleChange}
                // value={body}
                required
              />
              <Box display="flex" justifyContent="space-between">
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  onChange={handleChange}
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
            </Stack>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
export default CommentCard;
