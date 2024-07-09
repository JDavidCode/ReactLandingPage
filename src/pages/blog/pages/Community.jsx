import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import CommunityPost from '../components/posts/CommunityPost';
import getTheme from '../../../components/getTheme';
import ScrollToTopOnMount from '../../../components/ScrollToTop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchCommunityContent } from '../../../utils/apiContent';
import HexLoader from '../../../components/HexLoader';
import { Grid } from '@mui/material';

export default function Community() {
	const [mode, setMode] = React.useState('dark');
	const theme = createTheme(getTheme(mode));
	const [blogContent, setBlogContent] = useState(null); // State to store fetched blog content
	const [loading, setLoading] = useState(true); // Initialize loading state

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const content = await fetchCommunityContent();
				setBlogContent(content);
			} catch (error) {
				console.error('Error fetching blog content:', error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchContent();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTopOnMount />
			{loading && (
				<Grid item xs={12} md={12} sx={{
					position: 'absolute', display: 'flex', justifyContent: 'center', backgroundColor: '#242424', height: '100vh', width: '100vw', top: 0, zIndex: 9999
				}}>
					<Box
						sx={{
							minHeight: '85vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'relative',
						}}
					>
						<HexLoader />
					</Box>
				</Grid>
			)}
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
