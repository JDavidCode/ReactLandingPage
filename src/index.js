import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './landing/LandingPage';
import BlogPage from './blog/Blog';
import CommunityBlogPage from './blog/pages/Community'
import UpdatesBlogPage from './blog/pages/Updates'
import SigInPage from './auth/SignIn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />  {/* Home (Landing) Page */}
      <Route path="/blog" element={<BlogPage />} />  {/* Blog Page */}
      <Route path="/blog/updates" element={<UpdatesBlogPage />} />  {/* Blog Page */}
      <Route path="/blog/community" element={<CommunityBlogPage />} />  {/* Login Page */}
      <Route path="/login" element={<SigInPage />} />  {/* Login Page */}
      {/* Add more routes for other sections as needed */}
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
