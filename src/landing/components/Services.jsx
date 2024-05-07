import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade'
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import SimpleCard from '../../components/cards/TopIconTD'

// Import necessary MUI icons
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

// User-Focused Services
const UserSolutions = [
  {
    icon: <PeopleRoundedIcon />,
    title: 'Personalized Messaging',
    description: 'Connect with friends and family through personalized messages. Integration with popular apps like WhatsApp and Telegram for seamless communication.',
  },
  {
    icon: <MessageRoundedIcon />,
    title: 'Adaptable Content',
    description: 'Discover relevant and interesting content tailored to you, thanks to algorithms that analyze your preferences and behavior.',
  },
  {
    icon: <PeopleRoundedIcon />,
    title: 'Parental Controls',
    description: 'Create a safe environment for kids with robust parental controls, including content filtering and usage monitoring.',
  },
  {
    icon: <BusinessRoundedIcon />,
    title: 'Information Services',
    description: 'Access information on various topics such as weather, news, and interactive content, customized to your interests and location.',
  },
  {
    icon: <PeopleRoundedIcon />,
    title: 'Virtual Events',
    description: 'Join virtual events and conferences with interactive features like Q&A sessions, real-time polls, and group chat.',
  },
  {
    icon: <MessageRoundedIcon />,
    title: 'Language Translation',
    description: 'Translate messages and content into various languages for barrier-free communication, with automatic translation and multilingual support.',
  },
  {
    icon: <PeopleRoundedIcon />,
    title: 'Health and Wellness Insights',
    description: 'Receive recommendations and reminders for healthy activities, habit tracking, and personal wellness.',
  },
];

// Business-Focused Services
const BusinessSolutions = [
  {
    icon: <BusinessRoundedIcon />,
    title: 'Custom Containers for Enterprises',
    description: 'Deploy custom container solutions to meet the specific needs of your enterprise with scalable and secure infrastructure.',
  },
  {
    icon: <AnalyticsRoundedIcon />,
    title: 'Data Analytics',
    description: 'Gain insights into operations, customer behavior, and market trends with advanced data analytics, including predictive models.',
  },
  {
    icon: <MessageRoundedIcon />,
    title: 'API Integration',
    description: 'Integrate your applications with powerful APIs to facilitate data exchange and improve operational efficiency.',
  },
  {
    icon: <BusinessRoundedIcon />,
    title: 'Enterprise-Level Security',
    description: 'Protect sensitive data and comply with industry standards through robust security measures like encryption and multi-factor authentication.',
  },
  {
    icon: <LockRoundedIcon />,
    title: 'Compliance and Regulations',
    description: 'Ensure compliance with industry standards and regulations through audits and certifications.',
  },
  {
    icon: <BusinessRoundedIcon />,
    title: 'Remote Team Collaboration',
    description: 'Facilitate remote collaboration with project management tools, video conferencing, and shared workspaces.',
  },
  {
    icon: <AnalyticsRoundedIcon />,
    title: 'Market Research Tools',
    description: 'Access market research tools to gain insights into your competitors and industry trends.',
  },
];

export default function Services() {
  const [selected, setSelected] = useState('UserSolutions'); // 'UserSolutions' or 'BusinessSolutions'

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <Container
      id="solutions" sx={{ py: { xs: 8, sm: 16 } }}
    >
      <Grid container spacing={6} >
        <Grid item xs={12} md={8} mx='auto' textAlign={'center'}>
          <Box>
            <Typography component="h2" variant="h4" color="text.primary" >
              Adaptable Services for Any Requirement
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 4, sm: 6 }, mt:2 }}
            >
              Discover our adaptable services designed to meet every need. Whether you’re an individual seeking personalized support or a business with unique requirements, we have the flexibility and expertise to deliver. From tailored solutions to versatile support, experience a new level of service that adapts to you.
            </Typography>
          </Box>
        </Grid>
        <Box>
        <Stack direction="row" spacing={0} sx={{ justifyContent: 'center', mb: 8 }}>
          {/* Botón izquierdo */}
          <Button
            variant={selected === 'UserSolutions' ? 'contained' : 'outlined'}
            onClick={() => handleSelect('UserSolutions')}
            sx={{
              borderRadius: '0px', // Bordes redondeados solo a la izquierda
              border: '1px solid gray', // Mantener el borde
              borderRight: 'none', // Borde compartido con el segundo botón
              transform: 'skewX(-10deg)', // Inclinación hacia la derecha
              backgroundColor: selected === 'UserSolutions' ? 'primary.main' : 'transparent',
              color: selected === 'UserSolutions' ? 'common.white' : 'gray',
              '&:hover': {
                backgroundColor: selected === 'UserSolutions' ? 'primary.dark' : 'gray.100',
              borderRadius: '0px', // Bordes redondeados solo a la izquierda
              border: '1px solid gray', // Mantener el borde
              transform: 'skewX(-10deg)', // Inclinación hacia la izquierda
              },
            }}
          >
            For Users
          </Button>

          {/* Botón derecho */}
          <Button
            variant={selected === 'BusinessSolutions' ? 'contained' : 'outlined'}
            onClick={() => handleSelect('BusinessSolutions')}
            sx={{
              borderRadius: '0px', // Bordes redondeados solo a la izquierda
              border: '1px solid gray', // Mantener el borde
              transform: 'skewX(-10deg)', // Inclinación hacia la izquierda
              backgroundColor: selected === 'BusinessSolutions' ? 'primary.main' : 'transparent',
              color: selected === 'BusinessSolutions' ? 'common.white' : 'gray',
              '&:hover': {
                backgroundColor: selected === 'BusinessSolutions' ? 'primary.dark' : 'gray.100',
              borderRadius: '0px', // Bordes redondeados solo a la izquierda
              border: '1px solid gray', // Mantener el borde
              transform: 'skewX(-10deg)', // Inclinación hacia la izquierda
              },
            }}
          >
            For Business
          </Button>
        </Stack>
        {selected === 'UserSolutions' && (
        <Fade  in={selected === 'UserSolutions'} timeout={1200}>
          <Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Stack
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                spacing={4}
                mx={20}
                useFlexGap
              >
                {UserSolutions.map((content, index) => (
                  <SimpleCard key={index} content={content} index={index} />
                ))}
              </Stack>
            </Grid>
          </Box>
        </Fade>
        )}

        {selected === 'BusinessSolutions' && (
          <Fade in={selected === 'BusinessSolutions'} timeout={1200}>
            <Box>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Stack
                  display="grid"
                  gridTemplateColumns="repeat(2, 1fr)"
                  spacing={4}
                  mx={20}
                  useFlexGap
                >
                  {BusinessSolutions.map((content, index) => (
                    <SimpleCard key={index} content={content} index={index} />
                  ))}
                </Stack>
              </Grid>
            </Box>
          </Fade>
        )}
      </Box>
        <Box textAlign={'center'} xs={8} mt={8} mx={'auto'}>
        <Typography variant="body2" >
            If you'd like to learn more about how Emma can help you, visit our <Link href="#contact">contact page</Link> or explore our FAQs.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}