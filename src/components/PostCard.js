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
} from '@mui/material';
import { FaReply } from 'react-icons/fa';

import { styles } from '../components/styles';
import CommentCard from '../components/CommentCard';
import axios from '../api/axios';

const PostCard = ({ id, title, body }) => {
  const [comments, setComments] = React.useState(false);
  // const [ID, setID] = React.useState(false);
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

  return (
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
              return <CommentCard name={comment.name} body={comment.body} />;
            }
            return <></>;
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </Paper>
  );
};
export default PostCard;
