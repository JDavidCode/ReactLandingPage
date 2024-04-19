import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../components/Markdown'

function FeedPost(props) {
  const { posts, title } = props;
  return (
    <Grid
      id='feed'
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((postContent, index) => (
        <Markdown source={postContent} key={index} />
      ))}
    </Grid>
  );
}

FeedPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default FeedPost;