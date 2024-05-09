import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import LeftSideImageMiniPost from '../components/posts/LeftSideImageMiniPost';
import getTheme from '../../../components/getTheme';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Sidebar from '../components/Sidebar';
import ScrollToTopOnMount from '../../../components/ScrollToTop';
import MediumPaperPost from '../components/posts/MediumPaperPost';
import Box from '@mui/material/Box';

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random?wallpapers',
		imageLabel: 'Image Text',
	},
	{
		title: 'Post title',
		date: 'Nov 11',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://picsum.photos/250/250',
		imageLabel: 'Image Text',
	},
	{
		title: 'Featured post 2',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random?wallpapers',
		imageLabel: 'Image Text',
	},
	{
		title: 'Post title 3',
		date: 'Nov 11',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://picsum.photos/300/300',
		imageLabel: 'Image Text',
	},
];

const mainFeaturedPost = [
	{
		title: 'Title of a longer featured blog post',
		description:
			"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
		image: 'https://source.unsplash.com/random?wallpapers',
		imageText: 'main image description',
		linkText: 'Continue reading…',
	},
	{
		title: 'Title of a longer featured blog post',
		description:
			"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
		image: 'https://picsum.photos/600',
		imageText: 'main image description',
		linkText: 'Continue reading…',
	}
]

const sidebar = {
	title: 'About',
	description:
		'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	archives: [
		{ title: 'March 2020', url: '#' },
		{ title: 'February 2020', url: '#' },
		{ title: 'January 2020', url: '#' },
		{ title: 'November 1999', url: '#' },
		{ title: 'October 1999', url: '#' },
		{ title: 'September 1999', url: '#' },
		{ title: 'August 1999', url: '#' },
		{ title: 'July 1999', url: '#' },
		{ title: 'June 1999', url: '#' },
		{ title: 'May 1999', url: '#' },
		{ title: 'April 1999', url: '#' },
	],
	social: [
		{ name: 'GitHub', icon: GitHubIcon },
		{ name: 'X', icon: XIcon },
		{ name: 'Facebook', icon: FacebookIcon },
	],
};
export default function Updates() {
	const [mode, setMode] = React.useState('dark');
	const theme = createTheme(getTheme(mode));

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTopOnMount />
			<Header mode={mode} toggleColorMode={toggleColorMode} />
			<Container maxWidth="lg">
				<Box mt={10}>
					<Stack>
						{mainFeaturedPost.map((post) => (
							<MediumPaperPost key={post.title} post={post} />
						))}
					</Stack>
					<Box mt={4} display={'grid'} gridTemplateColumns={'6fr 3fr'}>
						<Stack spacing={2} mr={4} >
							{featuredPosts.map((post) => (
								<LeftSideImageMiniPost key={post.title} post={post} />
							))}
						</Stack>
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Box>
				</Box>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
