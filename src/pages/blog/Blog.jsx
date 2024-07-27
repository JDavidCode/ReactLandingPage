import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import WidePaperPost from './components/posts/WidePaperPost';
import RightSideImagePost from './components/posts/RightSideImagePost';
import TopSideImagePost from './components/posts/TopSideImagePost';
import Footer from '../components/Footer';
import getLPTheme from '../../components/getTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FAQ from '../components/FAQ';
import { fetchFeedContent } from '../../utils/apiContent';
import HexLoader from '../../components/HexLoader';

import FadeInSection from '../components/FadeInSection'


export default function Blog() {
  const [mode, setMode] = useState('dark');
  const theme = createTheme(getLPTheme(mode));
  const [blogContent, setBlogContent] = useState(null); // State to store fetched blog content

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchFeedContent(); 
        setBlogContent(content); 
      } catch (error) {
        console.error('Error fetching blog content:', error.message);
      }
    };

    fetchContent();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTopOnMount />
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Container maxWidth="lg">
        <FadeInSection>
          {blogContent ? (
            <Box mt={12}>
              <WidePaperPost post={blogContent.main} />
              <Stack display={'grid'} gridTemplateColumns={'3fr 3fr'} mt={2}>
                {blogContent.secondary.map((post) => (
                  <FadeInSection key={post.id}>
                    <Box>
                      <RightSideImagePost post={post} />
                    </Box>
                  </FadeInSection>
                ))}
              </Stack>
              <Stack mt={2} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'}>
                {blogContent.terceary.map((post) => (
                  <FadeInSection key={post.id}>
                    <Box>
                      <TopSideImagePost post={post} />
                    </Box>
                  </FadeInSection>
                ))}
              </Stack>
            </Box>
          ) :
            (<Typography>...</Typography>)}
        </FadeInSection>
      </Container>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </ThemeProvider>
  );
  }
