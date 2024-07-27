import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import LeftSideImageMiniPost from '../components/posts/LeftSideImageMiniPost';
import getTheme from '../../../components/getTheme';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Fade, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import ScrollToTopOnMount from '../../../components/ScrollToTop';
import MediumPaperPost from '../components/posts/MediumPaperPost';
import Box from '@mui/material/Box';
import { fetchUpdatesContent } from '../../../utils/apiContent';
import HexLoader from '../../../components/HexLoader';
import FadeInSection from '../../components/FadeInSection'


export default function Updates() {
	const [mode, setMode] = React.useState('dark');
	const theme = createTheme(getTheme(mode));
	const [blogContent, setBlogContent] = useState(null); // State to store fetched blog content
	const [socialIcons, setSocialIcons] = useState([]); // State to store loaded social icons

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const loadIcons = async () => {
		try {
			const loadedIcons = await Promise.all(
				blogContent.sidebar.social.map(async item => {
					const { default: IconComponent } = await import(`@mui/icons-material/${item.name}`);
					return { name: item.name, icon: IconComponent };
				})
			);
			setSocialIcons(loadedIcons);
		} catch (error) {
			console.error('Error loading icons:', error);
			// Handle error state or fallback
		}
	};

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const content = await fetchUpdatesContent();
				setBlogContent(content);
			} catch (error) {
				console.error('Error fetching blog content:', error.message);
			} 
		};

		fetchContent();
	}, []);

	useEffect(() => {
		if (blogContent) {
			loadIcons();
		}
	}, [blogContent]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTopOnMount />
			<Header mode={mode} toggleColorMode={toggleColorMode} />
			<Container maxWidth="lg">
				<FadeInSection>
					{blogContent ? (
						<Box mt={10}>
							<Stack>
								{blogContent.main.map((post) => (
									<MediumPaperPost key={post.id} post={post} />
								))}
							</Stack>
							<Box mt={4} display={'grid'} gridTemplateColumns={'6fr 3fr'}>
								<Stack spacing={2} mr={4} >
									{blogContent.featured.map((post) => (
										<LeftSideImageMiniPost key={post.id} post={post} />
									))}
								</Stack>
								<Sidebar
									title={blogContent.sidebar.title}
									description={blogContent.sidebar.description}
									archives={blogContent.sidebar.archives}
									social={socialIcons} // Pass loaded social icons here
								/>
							</Box>
						</Box>
					) : (<Typography>Loading</Typography>)}
				</FadeInSection>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
