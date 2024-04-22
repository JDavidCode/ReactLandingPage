import * as React from 'react';


// Material-UI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SimpleCard1({ content, index, selected, onClick }) {

	return (
		<Card
			direction="column"
			color="inherit"
			index={index}
			spacing={1}
			component={Button}
			onClick={onClick}
			useFlexGap
			sx={{
				p: 3,
				height: 'fit-content',
				width: '100%',
				background: 'none',
				minHeight: '200px',
				backgroundColor: selected ? 'action.hover' : undefined,
				borderColor: (theme) => {
					if (theme.palette.mode === 'light') {
						return selected ? 'primary.light' : 'grey.200';
					}
					return selected ? 'primary.dark' : 'grey.800';
				},
			}}
		>
			<Box sx={{ opacity: '50%' }}>{content.icon}</Box>
			<div>
				<Typography fontWeight="medium" color="text.primary" gutterBottom>
					{content.title}
				</Typography>
				<Typography variant="body2" color="text.secondary" >
					{content.description}
				</Typography>
			</div>
		</Card>
	);
}

export default SimpleCard1;