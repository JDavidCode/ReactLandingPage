import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getLPTheme from '../../components/getTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop'
import ToggleColorMode from '../../components/ToggleColorMode';
import LogoDark512 from '../../assets/LogoDark512.webp'; // Import the image file

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      <Typography >Copyright © </Typography>
      <Typography component={Link} to='/'>Arnica </Typography>
      <Typography>      {new Date().getFullYear()}</Typography>
    </Typography>
  );
}


export default function SignIn() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
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
          backgroundImage: 'none',
          m: 'auto',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
        <Container component="main" maxWidth="xs" variant="regular"
          sx={(theme) => ({
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}>
          <CssBaseline />
          <ScrollToTopOnMount />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component={Link}
              to='/'
              sx={{
                backgroundImage: `url(${LogoDark512})`,
                backgroundSize: 'cover',
                width: 65,
                height: 65,
                borderRadius: '50%'
              }}
            />
            <Typography component="h1" variant="h5" mt={2}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ shrink: false }}
                sx={{
                  pt: '12px' // Espaciado superior

                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{ shrink: false }}
                sx={{
                  py: '12px'
                }}
              />


              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                component={Link}
                to='http://localhost:5174/'
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography component={Link} to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bottom: 0
            }}
          >
            <Copyright />
          </Box>
        </Container>
      </Box>

    </ThemeProvider>
  );
}
