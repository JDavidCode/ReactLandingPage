// React
import * as React from 'react';

// Material-UI
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Components
import AppBar from '../components/AppBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Features from './components/Features';
import Services from './components/Services';

import Pricing from './components/Pricing';
import LogoCollection from '../components/LogoCollection';
import FAQ from './components/FAQ';
import Footer from '../components/Footer';
import ScrollToTopOnMount from '../components/ScrollToTop';
import getLPTheme from '../components/getLPTheme';


export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme(getLPTheme(mode));

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
        <LogoCollection />
        <Divider />
        <Projects />
        <Divider />
        <Features />
        <Divider />
        <Services />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
