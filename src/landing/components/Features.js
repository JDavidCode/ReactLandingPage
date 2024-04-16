// React components
import * as React from 'react';

// Material-UI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Material-UI icons
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LensBlurRoundedIcon from '@mui/icons-material/LensBlurRounded';
import ControlCameraRoundedIcon from '@mui/icons-material/ControlCameraRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';

import SimpleCard1 from '../../components/cards/SimpleCard-1'

const aiFeatures = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable AI algorithms',
    description:
      'Our AI algorithms dynamically adapt to your data, optimizing performance and accuracy for your specific needs.',
  },
  {
    icon: <AutoGraphRoundedIcon />,
    title: 'Innovative predictive analytics',
    description:
      'Leverage cutting-edge predictive analytics to uncover valuable insights and anticipate future trends, empowering data-driven decision-making.',
  },
  {
    icon: <EngineeringRoundedIcon />,
    title: 'Expert AI support',
    description:
      'Access our team of AI experts for dedicated support and guidance, ensuring smooth integration and optimal performance of our AI solutions.',
  },
];

const vrFeatures = [
  {
    icon: <LensBlurRoundedIcon />,
    title: 'Immersive VR environments',
    description:
      'Experience immersive virtual environments that transport you to new worlds and unlock unparalleled levels of engagement and interaction.',
  },
  {
    icon: <ControlCameraRoundedIcon />,
    title: 'Intuitive VR controls',
    description:
      'Navigate seamlessly through virtual spaces with intuitive controls and interactions, providing a natural and immersive user experience.',
  },
  {
    icon: <SensorsRoundedIcon />,
    title: 'Realistic VR simulations',
    description:
      'Engage in realistic simulations that replicate real-world scenarios with precision, offering valuable training and educational opportunities.',
  },
];

const gamesFeatures = [
  {
    icon: <SmartDisplayRoundedIcon />,
    title: 'Dynamic gameplay mechanics',
    description:
      'Explore dynamic gameplay mechanics that offer endless possibilities for creativity, strategy, and skill development, keeping players engaged and entertained.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated game support',
    description:
      'Receive dedicated support from our gaming experts, ensuring smooth gameplay experiences and addressing any issues or inquiries promptly.',
  },
  {
    icon: <SmartToyRoundedIcon />,
    title: 'Immersive storytelling',
    description:
      'Immerse yourself in captivating storylines and narratives that unfold seamlessly within the game world, creating memorable and emotionally resonant experiences.',
  },
];


export default function Features() {
  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Features
          </Typography>
          <Typography variant="body1">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          <Grid item xs={11} sm={5} md={3} height='fit-content'>
            <Typography component="h2" variant="h4">
              AI
            </Typography>
            {aiFeatures.map((content, index) => (
              <SimpleCard1 content={content} index={index} />
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} height='fit-content'>
            <Typography component="h2" variant="h4">
              VR
            </Typography>
            {vrFeatures.map((content, index) => (
              <SimpleCard1 content={content} index={index} />
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} height='fit-content'>
            <Typography component="h2" variant="h4">
              GAMES
            </Typography>
            {gamesFeatures.map((content, index) => (
              <SimpleCard1 content={content} index={index} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
