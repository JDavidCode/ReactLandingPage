import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import WidePaperPost from './components/posts/WidePaperPost';
import RightSideImagePost from './components/posts/RightSideImagePost';
import TopSideImagePost from './components/posts/TopSideImagePost';
import Footer from '../components/Footer';
import getLPTheme from '../components/getLPTheme';
import ScrollToTopOnMount from '../components/ScrollToTop'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FAQ from '../components/FAQ';
import { useInView } from 'react-intersection-observer';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const SecondaryFeaturePost = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];
const TercearyFeaturePost = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
    {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
      {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/250/300',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/250/250',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Activa solo una vez
    threshold: 0.2, // Qué porcentaje del componente debe ser visible para activar
  });

  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 1s ease-in-out', // Suaviza la animación
        opacity: inView ? 1 : 0, // Cambia la opacidad en función de la visibilidad
      }}
    >
      {children}
    </div>
  );
};

export default function Blog() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTopOnMount />
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Container maxWidth="lg">
        <FadeInSection>
          <Box mt={12}>
            <WidePaperPost post={mainFeaturedPost} />
            <Stack display={'grid'} gridTemplateColumns={'3fr 3fr'} mt={2}>
              {SecondaryFeaturePost.map((post) => (
                <FadeInSection>
                  <Box key={post.title}>
                    <RightSideImagePost post={post} />
                  </Box>
                </FadeInSection>
              ))}
            </Stack>
            <Stack mt={2} display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'}>
              {TercearyFeaturePost.map((post) => (
                <FadeInSection key={post.title}>
                  <Box>
                    <TopSideImagePost post={post} />
                  </Box>
                </FadeInSection>
              ))}
            </Stack>
          </Box>
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