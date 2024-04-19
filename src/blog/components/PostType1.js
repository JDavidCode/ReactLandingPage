import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MoreIcon from '@mui/icons-material/More';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'


export default function PostType1() {

	return (
		<Box>
			<Grid container justifyContent="center" sx={{ py: 4 }}>
				<Stack spacing={2} width="100%">
					<Typography variant="h4" fontWeight="medium">
						The Garden City
					</Typography>
					<Typography color="text.secondary" display={'inline-block'}>
						April 13, 2024
					</Typography>
					<Typography variant="body1" noWrap>
						Bengaluru (also called Bangalore) is the center of India's
						high-tech industry. It is located in southern India on the Deccan
						Plateau. The city is also known for its parks and nightlife.
						Bangalore is the major center of India's IT industry, popularly
						known as the Silicon Valley of India.
					</Typography>
				</Stack>
				<Box display="flex" justifyContent="flex-end" px={2}>
					<IconButton>
						<MoreIcon />
					</IconButton>
				</Box>
			</Grid>
		</Box>
	);
}