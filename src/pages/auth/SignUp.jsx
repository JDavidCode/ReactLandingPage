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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      <Typography>Copyright © </Typography>
      <Typography component={Link} to='/'>Arnica </Typography>
      <Typography>{new Date().getFullYear()}</Typography>
    </Typography>
  );
}

export default function SignUp() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box xs={12} sx={{ backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)', backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
      </Box>
      <Box position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: mode === 'dark' ? `url(${BackgroundDark})` : `url(${BackgroundWhite})`,
          m: 'auto',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
        <Container
          maxWidth="xs"
          sx={(theme) => ({
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(17, 24, 39, 1)'
                : 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'rgba(17, 24, 39, 1)',
            borderRadius: '0.75rem',
            padding: '2rem',
            color: 'rgba(243, 244, 246, 1)',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
        >
          <CssBaseline />
          <ScrollToTopOnMount />
          <Box
            maxWidth="xs"
            sx={{
              backgroundColor: 'rgba(17, 24, 39, 1)',
              borderRadius: '0.75rem',
              padding: '2rem',
              color: 'rgba(243, 244, 246, 1)',
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
