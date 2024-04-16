// React components
import * as React from 'react';

// Material-UI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Material-UI icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GamesIcon from '@mui/icons-material/Games';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import SimpleCard from '../../components/cards/SimpleCard'

const items = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'AI',
    description:
      'Our AI project is designed to offer flexibility, customization, and utility across various industries and applications. With adaptable features and customizable options, it empowers users to tailor solutions to their specific needs.',

  },
  {
    icon: <ViewInArIcon />,
    title: 'VR',
    description:
      'Our VR project focuses on delivering immersive experiences utilizing the latest virtual reality technology. We aim to provide users with captivating virtual environments and interactive simulations, opening new possibilities in entertainment, education, and beyond.',

  },
  {
    icon: <GamesIcon />,
    title: 'GAMES',
    description:
      'Our games project ensures accessibility across all platforms, including web, mobile, and desktop. We aim to deliver seamless and enjoyable gameplay experiences to players everywhere.',

  },
];

const ai_items = [{
  title: 'EMMA',
  description: 'A great assistant, for everyone.'
},
{
  title: 'JONAS',
  description: 'A great assistant for Coders.'
},
{
  title: 'KATERINE',
  description: 'A great trader bot, risk.'
}
]

const vr_items = [{
  title: 'FACTIONS',
  description: 'A huge factions, for everyone.'
},
{
  title: 'TOWE',
  description: 'A small world, for families.'
},
{
  title: 'ALMY',
  description: 'A custom space to design your own vr worlds.'
}
]

const game_items = [{
  title: 'EPLO',
  description: 'Need some action?, come and play with friends.'
},
{
  title: 'ART',
  description: 'A game for the creatives one, come and get the top painting.'
},
{
  title: 'ROUD',
  description: 'Need fast?, drive the most fast cars.'
}
]
export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const [selectedSection, setItems] = React.useState(ai_items);
  const selectedFeature = items[selectedItemIndex];
  React.useEffect(() => {
    switch (selectedFeature.title) {
      case 'AI':
        setItems(ai_items);
        break;
      case 'VR':
        setItems(vr_items);
        break;
      case 'GAMES':
        setItems(game_items);
        break;
      default:
        break;
    }
  }, [selectedFeature]);

  return (
    <Container id="projects" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Explore Our Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Explore our innovative projects focusing on AI, VR, and games. Dive into our latest developments to discover the unique features and benefits they offer. From cutting-edge AI algorithms to immersive VR experiences and captivating gaming environments.
            </Typography>
          </Box>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map((content, index) => (
              <SimpleCard
                key={index}
                content={content}
                index={index}
                selected={selectedItemIndex === index}
                onClick={() => handleItemClick(index)}
              />))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}

          sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'flex-end', width: '100%', }}>
          <Card
            variant="outlined"
            sx={{
              height: '80%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
              alignItems: 'center',
              justifyContent: "center"
            }}
          >
            <Grid item xs={12} md={10}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                useFlexGap
                sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
              >
                {selectedSection.map((content, index) => (
                  <SimpleCard
                    key={index}
                    content={content}
                    index={index}
                    selected={selectedItemIndex === index}
                    onClick={() => handleItemClick(index)}
                  />                ))}
              </Stack>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
