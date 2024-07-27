import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getLPTheme from '../../components/getTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import ToggleColorMode from '../../components/ToggleColorMode';
import LogoDark512 from '../../assets/LogoDark512.webp';
import { Container, Typography, Box, TextField, Button, Link as fLink, Divider, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import BackgroundDark from '../../assets/bg/quantumBg-1.svg'
import BackgroundWhite from '../../assets/bg/quantumBg-2.svg'
import { register } from '../../utils/api'


export default function SignUp() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const formData = new FormData(event.target);
      const username = formData.get('username');
      const password = formData.get('password');
      await register(username, password);

      const redirectUrl = `/login`;
      // Redirect the user
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          boxShadow: 0,
          backgroundImage: mode === 'dark' ? `url(${BackgroundDark})` : `url(${BackgroundWhite})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }}>
        <Container
          maxWidth="xs"
        >
          <CssBaseline />
          <ScrollToTopOnMount />
          <Box
            position="fixed"
            maxWidth="xs"
            sx={{
              backgroundColor: 'rgba(17, 24, 39, 1)',
              borderRadius: '0.75rem',
              padding: '2rem',
              color: 'rgba(243, 244, 246, 1)',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 700,
              }}
            >
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Box sx={{ mt: 1 }}>
                <Typography
                  component="label"
                  htmlFor="username"
                  sx={{
                    display: 'block',
                    color: 'rgba(156, 163, 175, 1)',
                    mb: '4px',
                  }}
                >
                  Username
                </Typography>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  variant="outlined"
                  placeholder=""
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.375rem',
                      backgroundColor: 'rgba(17, 24, 39, 1)',
                      color: 'rgba(243, 244, 246, 1)',
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(167, 139, 250, 1)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '0.75rem 1rem',
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  component="label"
                  htmlFor="email"
                  sx={{
                    display: 'block',
                    color: 'rgba(156, 163, 175, 1)',
                    mb: '4px',
                  }}
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  variant="outlined"
                  placeholder=""
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.375rem',
                      backgroundColor: 'rgba(17, 24, 39, 1)',
                      color: 'rgba(243, 244, 246, 1)',
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(167, 139, 250, 1)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '0.75rem 1rem',
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  component="label"
                  htmlFor="password"
                  sx={{
                    display: 'block',
                    color: 'rgba(156, 163, 175, 1)',
                    mb: '4px',
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  placeholder=""
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.375rem',
                      backgroundColor: 'rgba(17, 24, 39, 1)',
                      color: 'rgba(243, 244, 246, 1)',
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(167, 139, 250, 1)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(55, 65, 81, 1)',
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '0.75rem 1rem',
                    },
                  }}
                />
              </Box>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: 'rgba(167, 139, 250, 1)',
                  color: 'rgba(17, 24, 39, 1)',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  fontWeight: 600,
                }}
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
              <Divider sx={{ flex: 1, backgroundColor: 'rgba(55, 65, 81, 1)' }} />
              <Typography sx={{ px: 1, fontSize: '0.875rem', color: 'rgba(156, 163, 175, 1)' }}>
                Sign up with social accounts
              </Typography>
              <Divider sx={{ flex: 1, backgroundColor: 'rgba(55, 65, 81, 1)' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton aria-label="Sign up with Google" sx={{ backgroundColor: 'transparent', p: '0.75rem', ml: 1 }}>
                <GoogleIcon sx={{ fill: '#fff' }} />
              </IconButton>
              <IconButton aria-label="Sign up with Twitter" sx={{ backgroundColor: 'transparent', p: '0.75rem', ml: 1 }}>
                <TwitterIcon sx={{ fill: '#fff' }} />
              </IconButton>
              <IconButton aria-label="Sign up with GitHub" sx={{ backgroundColor: 'transparent', p: '0.75rem', ml: 1 }}>
                <GitHubIcon sx={{ fill: '#fff' }} />
              </IconButton>
            </Box>
            <Typography align="center" sx={{ mt: 2, fontSize: '0.75rem', color: 'rgba(156, 163, 175, 1)' }}>
              Already have an account?{' '}
              <Link to="/login" sx={{ color: 'rgba(243, 244, 246, 1)', textDecoration: 'none', fontSize: '14px' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
