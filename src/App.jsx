import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './pages/landing/LandingPage';
import BlogPage from './pages/blog/Blog';
import CommunityBlogPage from './pages/blog/pages/Community';
import UpdatesBlogPage from './pages/blog/pages/Updates';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import HexLoader from './components/HexLoader'; // Ensure this path is correct
import getLPTheme from './components/getTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Box } from '@mui/material'; // Import missing components from MUI

const theme = createTheme(getLPTheme('dark'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove scroll behavior on mount
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {loading ? (
          <Grid item xs={12} md={12} sx={{
            position: 'absolute', display: 'flex', justifyContent: 'center', backgroundColor: 'main.900', height: '100vh', width: '100vw', top: 0, zIndex: 9999
          }}>
            <Box
              sx={{
                minHeight: '85vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <HexLoader />
            </Box>
          </Grid>
        ) : (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/updates" element={<UpdatesBlogPage />} />
              <Route path="/blog/community" element={<CommunityBlogPage />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="/register" element={<SignUpPage />} />
            </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

const DashboardPageWithLocation = () => {
  const location = useLocation();

  useEffect(() => {
    // You can use the location here
  }, [location]);

  return <DashboardPage />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);