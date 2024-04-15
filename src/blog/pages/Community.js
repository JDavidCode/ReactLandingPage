import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import CommunityPost from '../components/CommunityPost'
import getLPTheme from '../../components/getLPTheme';
import ScrollToTopOnMount from '../../components/ScrollToTop'
import PostType1 from '../components/PostType1'

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

			<Container maxWidth="lg" >
				<Header mode={mode} toggleColorMode={toggleColorMode} />
				<CommunityPost />
				<PostType1/>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
