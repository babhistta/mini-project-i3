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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    axios.get(`https://gorest.co.in/public/v1/posts`).then((res) => {
      const responseTasks = res.data.data;
      setPosts(responseTasks);
      console.log(res);
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
              News
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
            {posts ? (
              <div>
                {posts.slice(0, 10).map((post) => {
                  return (
                    <PostCard
                      key={post.id}
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
          <Stack spacing={3}>
            <TextField
              required
              id="outlined-required"
              label="Input Your Task"
              sx={{ mt: 3 }}
            />
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
                startIcon={<FaPlus size={10} />}
                sx={{ width: '100%', ml: 1 }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
