import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import Countdown from './components/Countdown';

import Countdown from './components/Countdown';

import BlogPage from './blog/Blog';
import CommunityBlogPage from './blog/pages/Community';
import UpdatesBlogPage from './blog/pages/Updates';
import SignInPage from './auth/SignIn';
import SignUpPage from './auth/SignUp';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from './components/getLPTheme';

const theme = createTheme(getLPTheme('dark'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Countdown />} />
          {/* 
                    <Route path="/" element={<LandingPage />} />

          <Route path="/" element={<Countdown />} />
          {/* 
                    <Route path="/" element={<LandingPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/updates" element={<UpdatesBlogPage />} />
          <Route path="/blog/community" element={<CommunityBlogPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          */}

          */}

				</Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
