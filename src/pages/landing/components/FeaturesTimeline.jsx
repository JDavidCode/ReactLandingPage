import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { useTheme } from '@mui/system';
import { Typography, Box, Grid, Container } from "@mui/material";
import { motion } from 'framer-motion';
// Material-UI icons
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import TopIconTD from '../../components/cards/TopIconTD'
import MsipBanner from './MsipBanner'

//import Security from '../../assets/svg/security.svg?react';

const MainFeatures = [
	// Security Features
	{
		category: 'Security Features',
		icon: <LockRoundedIcon />,
		title: 'Advanced Security Protocols',
		description: 'Protect your data with advanced security protocols, including encryption and multi-factor authentication.',
	},

	// Privacy Features
	{
		category: 'Privacy Features',
		icon: <VisibilityOffRoundedIcon />,
		title: 'Robust Privacy Controls',
		description: 'Gain full control over your personal information and choose how it\'s shared.',
	},

	// User-Centric Features
	{
		category: 'User-Centric Features',
		icon: <GroupRoundedIcon />,
		title: 'User Feedback Integration',
		description: 'We integrate your feedback to improve the product and adapt it to your needs.',
	},

	// Portable Features
	{
		category: 'Portable Features',
		icon: <LaptopRoundedIcon />,
		title: 'Compact and Portable Design',
		description: 'Enjoy a compact and portable design that allows you to take your tools anywhere.',
	},

	// Interoperability Features
	{
		category: 'Interoperability Features',
		icon: <SyncAltRoundedIcon />,
		title: 'Seamless Integration with Other Tools',
		description: 'Integrate with popular tools and services for a seamless experience across platforms.',
	},
];


export default function Features() {
	const theme = useTheme();

	return (
		<Container
			id="features"
			sx={{
				py: { xs: 8, sm: 16 },
			}}
		>
			<Grid container spacing={6}>
				<Grid item xs={12} md={8} ml={8} >
					<Box>
						<Typography component="h2" variant="h4" color="text.primary">
							Features
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							gutterBottom
							sx={{ mb: { xs: 4, sm: 6 }, mt: 2 }}
						>
							Our applications are designed with five core features in mind: adaptability, intuitive design, innovation, precision, and reliable customer support. Explore how these attributes make our products stand out in the market.
						</Typography>
					</Box>
				</Grid>
				<Grid container mx={10}
					spacing={2}>
					<Timeline position="alternate">
						{MainFeatures.map((item, index) => (
							<TimelineItem key={index}>
								<TimelineSeparator>
									<TimelineDot color={theme.palette.mode === "light" ? "primary" : "primary"}>
										{item.icon}
									</TimelineDot>
									{index < MainFeatures.length - 1 && <TimelineConnector />}
								</TimelineSeparator>
								<TimelineContent>
									<motion.div
										initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.2 }}
										style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}
									>
										<Typography variant="body1" color="textSecondary">
											{item.category}
										</Typography>

										<Grid
											item
											key={index}
										>
											<TopIconTD content={item} index={index} border={false} />
										</Grid>
									</motion.div>
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</Grid>
				<Box mx={12} mt={12}>
					<MsipBanner />
				</Box>
			</Grid>
		</Container>
	);
}
