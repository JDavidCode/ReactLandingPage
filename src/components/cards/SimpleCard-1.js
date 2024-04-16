import * as React from 'react';


// Material-UI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function SimpleCard({ content, index }) {

	return (
		<Card
			direction="column"
			color="inherit"
			index={index}
			spacing={1}
			useFlexGap
			sx={{
				p: 3,
				height: '100%',
				border: '1px solid',
				background: 'transparent',
			}}
		>
			<Box sx={{ opacity: '50%' }}>{content.icon}</Box>
			<div>
				<Typography fontWeight="medium" color="text.primary" gutterBottom>
					{content.title}
				</Typography>
				<Typography variant="body2" color="text.secondary"
				>
					{content.description}
				</Typography>
			</div>
		</Card>
	);
}

export default SimpleCard;