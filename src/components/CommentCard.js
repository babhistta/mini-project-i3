import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';

const CommentCard = ({ id, name, body }) => {
  return (
    <Box ml={6} mb={2} display="flex" alignItems="center">
      <Avatar src="/img/avatar-male.png"></Avatar>
      <Box ml={2}>
        <Typography variant="body1" fontWeight="700">
          {name}
        </Typography>
        <Typography variant="body1" fontWeight="400">
          {body}
        </Typography>
      </Box>
    </Box>
  );
};
export default CommentCard;
