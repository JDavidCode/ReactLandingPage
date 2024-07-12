import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MediumPaperPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mt: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        height: 200, // Fix the maximum height to 200px
        overflow: 'hidden', // Ensure no content overflow
      }}
    >
      <img style={{ display: 'none' }} src={post.image} alt={post.imageText} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container sx={{ height: 200 }}> {/* Set grid height to 200px */}
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              overflow: 'hidden', // Ensure content remains within bounds
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              noWrap
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{
                whiteSpace: 'nowrap', // Prevent text wrapping
                textOverflow: 'ellipsis', // Ensure text doesn't overflow
              }}
            >
              {post.content}
            </Typography>
            <Link variant="subtitle1" href="#" sx={{ textOverflow: 'ellipsis' }}>
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MediumPaperPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediumPaperPost;
