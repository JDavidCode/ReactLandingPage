import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


function RightSideImageMiniPost(props) {
  const { post } = props;

  return (
    <Grid item height={100}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: 'flex',
            height: 100, // Set fixed height for the card
            overflow: 'hidden', // Prevent content overflow
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              overflow: 'hidden', // Prevent content overflow
            }}
          >
            <Typography component="h2" variant="h5" noWrap>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" noWrap>
              {post.date}
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                whiteSpace: 'discard-after', // Prevent text wrapping
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {post.content}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              height: '100%', // Ensure it matches the card's height
              display: { xs: 'none', sm: 'block' },
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

RightSideImageMiniPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RightSideImageMiniPost;
