import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import CommunityPost from '../components/posts/CommunityPost';
import getLPTheme from '../../components/getLPTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Community() {
	const [mode, setMode] = React.useState('dark');
	const theme = createTheme(getLPTheme(mode));

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTopOnMount />
			<Header mode={mode} toggleColorMode={toggleColorMode} />
			<Container maxWidth="lg" sx={{pt: { xs: 4, sm: 12 },}}>
				<Box
					alignItems={'center'}
					mx='auto'
	        sx={{
	          width: { sm: '100%', md: '60%' },
	          textAlign: 'center',
	        }}
	      >
	        <Typography component="h2" variant="h4" color="text.primary">
	          Community Post
	        </Typography>
	        <Typography variant="body1" color="text.secondary">
	          Share your experiences with our products and let others know what you love about them. We're dedicated to efficiency, durability, and customer satisfaction. Join our community to share your ideas, recommendations, and feedback, and help us shape the future of quality and innovation.
	        </Typography>
	      </Box>
				<CommunityPost />
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
