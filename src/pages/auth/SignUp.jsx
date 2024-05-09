import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LogoDark512 from '../../assets/LogoDark512.webp'; // Import the image file
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import getLPTheme from '../../components/getTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import ToggleColorMode from '../../components/ToggleColorMode';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      <Typography >Copyright © </Typography>
      <Typography component={Link} to='/'>Arnica </Typography>
      <Typography>      {new Date().getFullYear()}</Typography>
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
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '8fr 4fr', height: '100vh' }}>
        <Grid xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)', backgroundSize: 'cover' }}>
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Grid>
        <Grid xs={12} sm={8} md={5} p={4} my='auto' alignItems='center'>
          <CssBaseline />
          <ScrollToTopOnMount />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
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
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    p={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography component={Link} to="/login" variant="body2">
                    Already have an account? Sign in
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box position="fixed" bottom={0} right={0} xs={12} p={1}>
            <Copyright />
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
