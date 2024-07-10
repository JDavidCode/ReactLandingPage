import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Container } from '@mui/material';
import TopSideImagePost from '../../blog/components/posts/TopSideImagePost'
import { fetchUpdatesContent } from '../../../utils/apiContent';

// BlogPage Component (Combines BlogBanner and BlogPostSection)
function BlogPage() {
  const [contentData, setBlogContent] = useState(null); // State to store fetched blog content

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchUpdatesContent();
        setBlogContent(content);
      } catch (error) {
        console.error('Error fetching blog content:', error.message);
      }
    };

    fetchContent();
  }, []);
  
  return (
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
        <Typography variant="h3" color="text.primary" gutterBottom>
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
        {contentData ? (
          contentData.featured.map((post) => (
            <Box key={post.title}>
              <TopSideImagePost post={post} />
            </Box>
          ))
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Stack>


    </Container>
  );
}




export default BlogPage;