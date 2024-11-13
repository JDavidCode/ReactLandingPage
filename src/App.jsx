import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css'

import Landing from "./pages/Landing.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Blog from "./pages/blog/Blog.jsx"

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>  
        <Route exact path='/blog' element={<Blog/>}/> 
        <Route exact path='/blog/updates' element={<Blog/>}/>        
        <Route exact path='/blog/community' element={<Blog/>}/>        
       
      </Routes>
    </>
  );
}

export default App;
