import * as React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function LeftSideImageMiniPost(props) {
  const { post } = props;

  return (
    <Grid item m={5} height={100}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: "flex",
            height: 100,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 100,
              display: { xs: "none", sm: "block" },
              height: "100%",
            }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
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
                whiteSpace: "discard-after",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post.content}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

LeftSideImageMiniPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeftSideImageMiniPost;
