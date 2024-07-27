import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './pages/landing/LandingPage';
import BlogPage from './pages/blog/Blog';
import CommunityBlogPage from './pages/blog/pages/Community';
import UpdatesBlogPage from './pages/blog/pages/Updates';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import getLPTheme from './components/getTheme';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme(getLPTheme('dark'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/updates" element={<UpdatesBlogPage />} />
              <Route path="/blog/community" element={<CommunityBlogPage />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="/register" element={<SignUpPage />} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);