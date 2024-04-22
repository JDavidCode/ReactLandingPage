// React components
import * as React from 'react';

// Material-UI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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
    <Container
      id="features"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={8} >
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Discover what sets our product apart: adaptability, durability, intuitive design, and innovation. Experience precision in every detail and benefit from our reliable customer support.
            </Typography>
          </Box>
        </Grid>

        <Grid container spacing={3} useFlexGap px={8}>
          <Grid item xs={12} sm={6} md={4} height='fit-content'>
            <Typography item component="h2" variant="h4">
              AI
            </Typography>
            <Stack direction="column"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}>
              {aiFeatures.map((content, index) => (
                <SimpleCard1 content={content} index={index} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} height='fit-content'>
            <Typography item component="h2" variant="h4">
              VR
            </Typography>
            <Stack direction="column"
              spacing={2}
              useFlexGap
              sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}>
              {vrFeatures.map((content, index) => (
                <SimpleCard1 key={index} content={content} index={index} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} height='fit-content'>
            <Typography item component="h2" variant="h4">
              GAMES
            </Typography>
            <Stack direction="column"
              spacing={2}
              useFlexGap
              sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}>
              {gamesFeatures.map((content, index) => (
                <SimpleCard1 key={index} content={content} index={index} />
              ))}
            </Stack>

          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
