import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import BlogPage from './pages/blog/Blog';
import CommunityBlogPage from './pages/blog/pages/Community';
import UpdatesBlogPage from './pages/blog/pages/Updates';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getTheme from './components/getTheme';

const theme = createTheme(getTheme('dark'));

const container = document.getElementById('root');
const root = createRoot(container);
 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/updates" element={<UpdatesBlogPage />} />
          <Route path="/blog/community" element={<CommunityBlogPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
