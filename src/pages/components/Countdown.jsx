import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BannerDark from '../assets/LogoDark512.webp';
import BannerLight from '../assets/LogoWhite512.webp';

export default function Countdown() {
  const [mode, setMode] = React.useState('dark');
  const theme = createTheme({ palette: { mode } });

  const calculateTimeRemaining = () => {
    const launchDate = new Date('2024-10-01T00:00:00');
    const currentDate = new Date();
    const timeRemaining = launchDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = React.useState(calculateTimeRemaining());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(85, 166, 246, 0.1))`,
        })}
      >
<Box
  mx={3}
  mb={4}
  sx={(theme) => ({
    backgroundImage: theme.palette.mode === 'light'
      ? `url(${BannerLight})`
      : `url(${BannerDark})`,
    backgroundSize: 'cover',
    width: 100,
    height: 100,
    border: '2px solid white',
    boxShadow: '0 0 10px white, 0 0 20px white, 0 0 40px white, 0 0 60px white',
    borderRadius: '999px',
    boxSizing: 'border-box',
    animation: 'fade 6s infinite alternate', 
    '@keyframes fade': {
      '0%': { opacity: 1 }, 
      '25%': { opacity: 0.5 }, 
      '60%': { opacity: 0.8 }, 
      '100%': { opacity: 0.4 }, 
    },
  })}
/>


        <Typography variant="h4" component="h1" gutterBottom>
          Arnica Official Launch 
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {`${time.days} days ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
