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

const mainItems = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'AI',
    description:
      'Our AI project offers flexible and customizable solutions for various industries. With adaptable features, users can create tailored applications to meet their specific needs.',
  },
  {
    icon: <ViewInArIcon />,
    title: 'VR',
    description:
      'Our VR project delivers immersive virtual reality experiences using the latest technology. We create captivating environments and interactive simulations for entertainment, education, and more.',
  },
  {
    icon: <GamesIcon />,
    title: 'GAMES',
    description:
      'Our games project ensures seamless gameplay across all platforms—web, mobile, and desktop. We focus on delivering enjoyable gaming experiences to players everywhere.',
  },
];

const ai_items = [{
  title: 'EMMA',
  description: 'Your everyday assistant, designed to make life easier.'
},
{
  title: 'JONAS',
  description: 'The perfect coding assistant, crafted for developers.'
},
{
  title: 'KATERINE',
  description: 'A trading bot that balances opportunity with risk.'
}
]

const vr_items = [{
  title: 'FACTIONS',
  description: ' A large-scale VR environment, accessible to everyone.'
},
{
  title: 'TOWE',
  description: 'A smaller virtual world designed with families in mind.'
},
{
  title: 'ALMY',
  description: ' A customizable VR space to create and design your own virtual worlds.'
}
]

const game_items = [{
  title: 'EPLO',
  description: 'Ready for action? Join friends for thrilling gameplay.'
},
{
  title: 'ART',
  description: 'A game for creative minds—showcase your artistic talents.'
},
{
  title: 'ROUD',
  description: 'Love speed? Get behind the wheel of the fastest cars.'
}
]
export default function Projects() {
  const [selectedMainItemIndex, setSelectedMainItemIndex] = React.useState(0);
  const [selectedSubItemIndex, setSelectedSubItemIndex] = React.useState(0);

  
  const [items, setItems] = React.useState(ai_items);
  const currentSubItems = Array.isArray(items) ? items : [];

  const handleMainItemClick = (index) => {
    setSelectedMainItemIndex(index);
    setSelectedSubItemIndex(0)
  };

  const handleSubItemClick = (index) => {
    setSelectedSubItemIndex(index);
  };

  
  React.useEffect(() => {
    switch (selectedMainItemIndex) {
      case 0:
        setItems(ai_items);
        break;
      case 1:
        setItems(vr_items);
        break;
      case 2:
        setItems(game_items); 
        break;
      default:
        setItems([]);
        break;
    }
  }, [selectedMainItemIndex]);


  return (
    <Container id="projects" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6} >
        <Grid item xs={12} md={8} >
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Explore Our Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, mt:2 }}
            >
              Discover our innovative projects in AI, VR, and gaming. Dive into our latest developments to uncover unique features and benefits. From advanced AI algorithms to immersive VR experiences and engaging gaming environments, we push the boundaries of technology.
            </Typography>
          </Box>
        </Grid>
        <Grid display={'grid'} gridTemplateColumns={'5fr 4fr'}>
          <Stack spacing={2} sx={{px:8}}>
            {mainItems.map((content, index) => (
              <SimpleCard
                content={content}
                index={index}
                selected={selectedMainItemIndex === index}
                onClick={() => handleMainItemClick(index)}
              />
            ))}
          </Stack>
        <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack spacing={2} sx={{ px: 8 , width:'85%', position:'relative', overflowY:'scroll'}}>
            {currentSubItems.map((content, index) => (
              <SimpleCard
                content={content}
                index={index}
                selected={selectedSubItemIndex === index}
                onClick={() => handleSubItemClick(index)}
              />
            ))}
          </Stack>
        </Card>

        </Grid>
      </Grid>
    </Container>
  );
}
