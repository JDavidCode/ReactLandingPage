import React from 'react';
import { Box, Typography, Button, Stack, Container } from '@mui/material';
import TopSideImagePost from '../../blog/components/posts/TopSideImagePost'

const posts = [
  {
    title: 'Exploring New Frontiers in AI',
    date: 'April 10, 2024',
    description: 'A detailed look into the latest advancements in AI technology.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'AI Technology',
  },
  {
    title: 'The Future of Space Exploration',
    date: 'April 12, 2024',
    description: 'An in-depth analysis of upcoming space missions and discoveries.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Space Exploration',
  },
  {
    title: 'Tech Innovations in 2024',
    date: 'April 15, 2024',
    description: 'Discover the most groundbreaking innovations of the year.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Tech Innovations',
  },
];

// BlogPage Component (Combines BlogBanner and BlogPostSection)
const BlogPage = () => (
  <Container sx={{ py: { xs: 8, sm: 16 } }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em',
        backgroundColor: 'background.default',
        color: 'common.white',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h3"  color="text.primary" gutterBottom>
        Visit Our Blog
      </Typography>
			<Typography variant="h6" color="text.secondary" gutterBottom>
			  Explore our latest articles, updates, and product launches.
			</Typography>
    </Box>

    {/* Three-column grid */}
		<Stack
      display={'grid'}
      gridTemplateColumns={'repeat(3, 1fr)'}
			gap={3}
    >
      {posts.map((post) => (
        <Box key={post.title}>
          <TopSideImagePost post={post} />
        </Box>
      ))}
		</Stack>
	
  </Container>
);

export default BlogPage;