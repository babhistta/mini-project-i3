import React from 'react';
import {
  Divider,
  Typography,
  Box,
  Avatar,
  Paper,
  Button,
  Chip,
  CircularProgress,
  TextField,
  Modal,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FaReply, FaPlus, FaComment, FaTrash, FaEdit } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { styles } from '../components/styles';
import CommentCard from '../components/CommentCard';
import axios from '../api/axios';

const PostCard = ({ id, title, body }) => {
  const token =
    'aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1';

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [comments, setComments] = React.useState(false);
  React.useEffect(() => {
    console.log(id);
    axios
      .get(`https://gorest.co.in/public/v1/posts/${id}/comments`, {
        headers: {
          Authorization: `Bearer aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1`,
        },
      })
      .then((res) => {
        const responseTasks = res.data.data;
        setComments(responseTasks);
        console.log(responseTasks);
      });
  }, [id]);

  const deletePost = () => {
    axios
      .delete(`https://gorest.co.in/public/v1/posts/${id}`, {
        headers: {
          Authorization: `Bearer aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1`,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://gorest.co.in/public/v1/posts/${id}/comments`,
        createdTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Paper style={styles.cardTaskParent}>
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          flexGrow="1"
        >
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
        <IconButton onClick={handleClick}>
          <BiDotsVerticalRounded />
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
          <MenuItem onClick={deletePost} color="error">
            <ListItemIcon>
              <FaTrash fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <FaEdit fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        variant="h6"
        fontWeight="700"
        color="initial"
        sx={{ marginTop: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="400"
        color="initial"
        sx={{ marginTop: 1 }}
      >
        {body}
      </Typography>
      <Button
        variant="text"
        color="info"
        onClick={handleOpen}
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
      {comments ? (
        <div>
          {comments.map((comment) => {
            if (comment.post_id === id) {
              return (
                <CommentCard
                  name={comment.name}
                  body={comment.body}
                  id={comment.id}
                />
              );
            }
            return <></>;
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="body"
                label="Input Your Comment"
                multiline
                rows={4}
                maxRows={4}
                fullWidth
                onChange={handleChange}
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
    </Paper>
  );
};
export default PostCard;
