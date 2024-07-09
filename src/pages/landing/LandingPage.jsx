import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Divider } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// Tus componentes
import AppBar from '../components/AppBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Features from './components/FeaturesTimeline';
import Services from './components/Services';
import Pricing from './components/Pricing';
import LogoCollection from '../components/LogoCollection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import BlogBanner from './components/BlogBanner';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import getTheme from '../../components/getTheme';
import { ContentProvider, useContent } from '../../components/Context';
import { handleContent } from '../../utils/Constants';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Activa solo una vez
    threshold: 0.1, // Qué porcentaje del componente debe ser visible para activar
  });

  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 1.5s ease-in-out', // Suaviza la animación
        opacity: inView ? 1 : 0, // Cambia la opacidad en función de la visibilidad
      }}
    >
      {children}
    </div>
  );
};

const Landing = () => {
  const [mode, setMode] = useState('dark');
  const theme = createTheme(getTheme(mode));
  const { contentData, updateContent } = useContent(); // Usa el hook useUser para acceder al contexto
  
  useEffect(() => {
    const getContent = async () => {
      try {
        await handleContent(updateContent);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    // Call getContent immediately after defining it
    getContent();
  }, []);


  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTopOnMount />
      <AppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <FadeInSection>
          <LogoCollection />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <BlogBanner />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <Features />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <Services />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <FAQ />
        </FadeInSection>
        <Divider />
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </Box>
    </ThemeProvider>
  );
}

const LandingWithContentProvider = () => (
  <ContentProvider>
    <Landing />
  </ContentProvider>
);

export default LandingWithContentProvider;
