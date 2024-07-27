import * as React from 'react';


// Material-UI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function SimpleCard({ content, index, selected, onClick }) {
	return (
		<Card
			key={index}
			variant="outlined"
			component={Button}
			onClick={onClick}
			sx={{
				p: 3,
				height: 'fit-content',
				width: '100%',
				background: 'none',
				backgroundColor: selected ? 'action.hover' : undefined,
				borderColor: (theme) => {
					if (theme.palette.mode === 'light') {
						return selected ? 'primary.light' : 'grey.200';

					}
					return selected ? 'primary.dark' : 'grey.800';
				},
			}}
		>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					textAlign: 'left',
					flexDirection: { xs: 'column', md: 'row' },
					alignItems: { md: 'center' },
					gap: 2.5,
				}}
			>
				<Box sx={{ textTransform: 'none' }}>
					<Typography
						color="text.primary"
						variant="body2"
						fontWeight="bold"
					>
						{content.title}
					</Typography>
					<Typography
						color="text.secondary"
						variant="body2"
						sx={{ my: 0.5 }}
					>
						{content.description}
					</Typography>
					<Link
						color="primary"
						variant="body2"
						fontWeight="bold"
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							'& > svg': { transition: '0.2s' },
							'&:hover > svg': { transform: 'translateX(2px)' },
						}}
						onClick={(event) => {
							event.stopPropagation();
						}}
					>
						<span>Learn more</span>
						<ChevronRightRoundedIcon
							fontSize="small"
							sx={{ mt: '1px', ml: '2px' }}
						/>
					</Link>
				</Box>
			</Box>
		</Card>
	);
}

export default SimpleCard;