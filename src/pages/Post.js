import React from 'react';
import {
  Typography,
  Toolbar,
  Box,
  Container,
  Grid,
  Button,
  Modal,
  Stack,
  TextField,
  CircularProgress,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';

import { MdPostAdd } from 'react-icons/md';
import { styles } from '../components/styles';
import PostCard from '../components/PostCard';
import axios from '../api/axios';

export const Post = () => {
  const token =
    'aaa6bce8c4ef571ed7f9e3647d9178bf750ac31a448f66cc7fbbeb49318a53f1';

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = React.useState();
  const [myPosts, setMyPosts] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const responsePosts = res.data.data;
        setPosts(responsePosts);
        console.log(res);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v1/users/19/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const responsePosts = res.data.data;
        setMyPosts(responsePosts);
        console.log(res);
      });
  }, []);

  const [createdPost, setCreatePost] = React.useState({
    title: '',
    body: '',
    user_id: '19',
  });

  const handleChange = (event) => {
    setCreatePost({
      ...createdPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://gorest.co.in/public/v1/posts', createdPost, {
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
              My Posts
            </Typography>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="info"
              startIcon={<MdPostAdd size={20} />}
              style={styles.customButton}
            >
              Create Post
            </Button>
          </Grid>
          <Grid item xs={12}>
            {myPosts ? (
              <div>
                {myPosts.slice(0, 10).map((myPosts) => {
                  return (
                    <PostCard
                      id={myPosts.id}
                      body={myPosts.body}
                      title={myPosts.title}
                    />
                  );
                })}
              </div>
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={styles.titlePage}>
            <Typography variant="h5" color="initial" fontWeight={600}>
              All User Posts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {posts ? (
              <div>
                {posts.slice(0, 10).map((post) => {
                  return (
                    <PostCard
                      id={post.id}
                      body={post.body}
                      title={post.title}
                    />
                  );
                })}
              </div>
            ) : (
              <CircularProgress />
            )}
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
            <MdPostAdd size={50} />
          </Box>
          <Typography id="modal-modal-title" variant="h5" fontWeight="600">
            Create Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="title"
                required
                id="outlined-required"
                onChange={handleChange}
                label="Input Your Title"
                sx={{ mt: 3 }}
              />
              <TextField
                name="body"
                label="Input Your Description"
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
    </Box>
  );
};
