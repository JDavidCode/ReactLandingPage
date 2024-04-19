import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import FeedPost from '../components/FeedPost';
import FeaturePost from '../components/FeaturedPost';
import getLPTheme from '../../components/getLPTheme';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/Sidebar';
import post1 from '../blog-post1.md';
import post2 from '../blog-post2.md';
import post3 from '../blog-post3.md';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ScrollToTopOnMount from '../../components/ScrollToTop';

const posts = [post1, post2, post3];

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
		image: 'https://source.unsplash.com/random?wallpapers',
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
		image: 'https://source.unsplash.com/random?wallpapers',
		imageLabel: 'Image Text',
	},
];

export default function Updates() {
	const [mode, setMode] = React.useState('dark');
	const theme = createTheme(getLPTheme(mode));

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ScrollToTopOnMount />
			<Container maxWidth="lg">
				<Header mode={mode} toggleColorMode={toggleColorMode} />
				<Grid container spacing={4} sx={{ pt: '100px' }}>
					{featuredPosts.map((post) => (
						<FeaturePost key={post.title} post={post} />
					))}
				</Grid>
				<Grid container spacing={5} sx={{ mt: 3 }}>
					<FeedPost title="Updates" posts={posts} />
					<Sidebar
						title={sidebar.title}
						description={sidebar.description}
						archives={sidebar.archives}
						social={sidebar.social}
					/>
				</Grid>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
