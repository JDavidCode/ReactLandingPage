import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';

// MUI Icons for the services section
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AssistantIcon from '@mui/icons-material/Assistant';
import WidgetsIcon from '@mui/icons-material/WidgetsRounded';

// Data for the "Services" section
const emmaFeatures = [
  {
    icon: <AssistantIcon />,
    title: 'Information Services',
    description:
      'Emma can provide information on a wide range of topics, including chat, document answering, image generation, weather, time, and more. She can also connect with provided services of Arnica, everyting on the same place.',
  },
  {
		icon: <WidgetsIcon />,
		title: 'Tailored Solutions',
		description:
	  'Emma is designed to adapt to your individual requirements, from tailored web searches to personalized reminders, alarms, and task lists. Additionally, she offers a range of useful functions such as QR code generation, screenshot capture, and web page link extraction.',
	},
  {
    icon: <ChatRoundedIcon />,
    title: 'Messaging App Integration',
    description:
      'Emma can interact with messaging apps like WhatsApp and Telegram, allowing you to communicate with her through your preferred platform.',
  },
  {
    icon: <LanguageRoundedIcon />,
    title: 'Multi-Language Support',
    description:
      'Emma understands and translates different languages, enabling seamless communication and access to a global and diverse user base.',
  },

];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        pt: { xs: 6, sm: 12 },
        pb: { xs: 8, sm: 16 },
        borderRadius: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Emma: Your Customizable AI Assistant
        </Typography>
				<Typography variant="body1" align="center" paragraph>
					Emma is an artificial intelligence designed to adapt to your needs and accompany you wherever you go. With integration into messaging apps, multi-language support, multimedia versatility, and mobile compatibility, Emma is the perfect assistant for anyone, anywhere. Here are some of her key features:
				</Typography>


        <Grid container spacing={2} justifyContent="center" alignItems="center" mt={5} mx={'auto'} >
          {emmaFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack direction="column" alignItems="center" spacing={2} mb={5} sx={{ textAlign: 'center', width:280, height:200 }}>
                {feature.icon}
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" align="center" mt={4}>
          If you'd like to learn more about how Emma can help you, visit our <Link href="#contact">contact page</Link> or explore our FAQs.
        </Typography>
      </Container>
    </Box>
  );
}