import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { useTheme } from '@mui/system';
import { Paper, Typography } from "@mui/material";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import { motion } from 'framer-motion';

// Main Features data
const MainFeatures = [
	{
		category: 'Security Features',
		icon: <LockRoundedIcon />,
		title: 'Advanced Security Protocols',
		description: 'Protect your data with advanced security protocols, including encryption and multi-factor authentication.',
	},
	{
		category: 'Privacy Features',
		icon: <VisibilityOffRoundedIcon />,
		title: 'Robust Privacy Controls',
		description: 'Gain full control over your personal information and choose how it\'s shared.',
	},
	{
		category: 'User-Centric Features',
		icon: <GroupRoundedIcon />,
		title: 'User Feedback Integration',
		description: 'We integrate your feedback to improve the product and adapt it to your needs.',
	},
	{
		category: 'Portable Features',
		icon: <LaptopRoundedIcon />,
		title: 'Compact and Portable Design',
		description: 'Enjoy a compact and portable design that allows you to take your tools anywhere.',
	},
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
		<section id="features" style={{ marginBottom: '40px', scrollMarginTop: '28px' }}>
			<Typography variant="h4" align="center" gutterBottom>Main Features</Typography>
			<Timeline position="alternate">
				{MainFeatures.map((item, index) => (
					<TimelineItem key={index}>
						<TimelineSeparator>
							<TimelineDot color={theme.palette.mode === "light" ? "primary" : "secondary"}>
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
								<Paper elevation={3} style={{ padding: '16px', backgroundColor: theme.palette.mode === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)" }}>
									<Typography variant="h6" component="h3">
										{item.title}
									</Typography>
									<Typography variant="body1">
										{item.description}
									</Typography>
								</Paper>
							</motion.div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
}
