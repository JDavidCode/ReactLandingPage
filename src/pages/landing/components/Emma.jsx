import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';

// MUI Icons for the services section
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AssistantIcon from '@mui/icons-material/Assistant';
import WidgetsIcon from '@mui/icons-material/WidgetsRounded';
import SimpleCard from '../../components/cards/TopIconTD'

// Data for the "Services" section
const emmaFeatures = [
  {
    icon: <AssistantIcon />,
    title: 'Information Services',
    description:
      'Emma provides information on various topics, including chat, document answering, image generation, weather, and news. She can also connect with Arnica´s provided services, offering everything in one place.',
  },
  {
		icon: <WidgetsIcon />,
		title: 'Tailored Solutions',
		description:
	  'Emma adapts to your unique needs with personalized web searches, reminders, alarms, and task lists. She also offers additional features like QR code generation, screenshot capture, and web page link extraction.',
	},
  {
    icon: <ChatRoundedIcon />,
    title: 'Messaging App Integration',
    description:
      'Emma integrates with popular messaging apps like WhatsApp and Telegram, allowing you to interact with her on your preferred platform.',
  },
  {
    icon: <LanguageRoundedIcon />,
    title: 'Multi-Language Support',
    description:
      'Emma understands and translates multiple languages, enabling seamless communication and a diverse global user base.',
  },

];

export default function Services() {
  return (
    <Container
      id="services"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Grid container spacing={2} >
        <Grid item xs={12} md={8} mx='auto' textAlign={'center'}>
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
            Emma: Your Customizable AI Assistant
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, mt:2 }}
            >
            Emma is an AI designed to adapt to your needs and be your companion wherever you go. Emma is the ideal assistant for anyone, anywhere. Here's a look at her key features:
            </Typography>
          </Box>
        </Grid>
        <Box>
          <Grid item spacing={2} justifyContent="center" alignItems="center" mx={'auto'}>
            <Stack
              display={'grid'}
              gridTemplateColumns={'2fr 2fr'}
              spacing={4}
              mx={20}
              useFlexGap>
              {emmaFeatures.map((content, index) => (
                <SimpleCard
                  key={index}
                  content={content}
                  index={index}
                />
              ))}
            </Stack>
          </Grid>
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