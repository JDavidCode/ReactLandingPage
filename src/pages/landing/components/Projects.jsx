// React components
import * as React from 'react';

// Material-UI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade'
// Material-UI icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GamesIcon from '@mui/icons-material/Games';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import LeftIconTCard from '../../components/cards/LeftIconT'
import SimpleCard from '../../components/cards/SimpleCard'

const mainItems = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'AI',
    description:
      'Our AI project offers flexible and customizable solutions for various industries. With adaptable features, users can create tailored applications to meet their specific needs.',
    background_url:'https://source.unsplash.com/random?wallpapers'
  },
  {
    icon: <ViewInArIcon />,
    title: 'VR',
    description:
      'Our VR project delivers immersive virtual reality experiences using the latest technology. We create captivating environments and interactive simulations for entertainment, education, and more.',
        background_url:'https://source.unsplash.com/random?wallpapers'

  },
  {
    icon: <GamesIcon />,
    title: 'GAMES',
    description:
      'Our games project ensures seamless gameplay across all platforms—web, mobile, and desktop. We focus on delivering enjoyable gaming experiences to players everywhere.',
    background_url:'https://source.unsplash.com/random?wallpapers'

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
},
{
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
        <Grid item xs={12} md={8} ml={8} >
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Explore Our Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 4, sm: 6 }, mt:2 }}
            >
              Discover our innovative projects in AI, VR, and gaming. Dive into our latest developments to uncover unique features and benefits. Every project is built upon our core features stack, ensuring innovation and quality in everything we create.
            </Typography>
          </Box>
        </Grid>
        <Grid container display={'grid'} gridTemplateColumns={'5fr 4fr'} mx={10} minHeight={500}>
          <Stack item='true' spacing={2} sx={{px:6}} justifyContent={'center'}>
            {mainItems.map((content, index) => (
              <LeftIconTCard
                content={content}
                key={index}
                index={index}
                selected={selectedMainItemIndex === index}
                onClick={() => handleMainItemClick(index)}
              />
            ))} 
          </Stack>
          <Box
            width={'100%'}
            height={500}
            sx={{
              borderRadius: '8px',
              padding: '16px', // Espacio para evitar que el contenido toque los bordes
              overflowY: 'auto', // Permitir el desplazamiento vertical
              boxShadow: (theme) => {
                return theme.palette.mode === 'light'
                  ? '1px 1px 8px 4px rgba(0, 0, 0, 0.2)' // Sombra para modo claro
                  : '1px 1px 8px 4px rgba(100, 255, 255, 0.05)'; // Sombra para modo oscuro
              },
            }}
          >
            <Grid
              container
              sx={{
                justifyContent:'center'
              }}
              spacing={2}
            >
              {currentSubItems.map((content, index) => (
                <Grid
                  item
                  xs={12} // Ensures that the grid item takes the full width of its container
                  key={index}
                >
                  <SimpleCard
                    content={content}
                    index={index}
                    selected={selectedSubItemIndex === index}
                    onClick={() => handleSubItemClick(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
