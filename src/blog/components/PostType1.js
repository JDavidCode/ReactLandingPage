import React from 'react';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import HStack from '@mui/material/Stack';
import MoreIcon from '@mui/icons-material/More';

const HeroImg = 'https://source.unsplash.com/random?wallpapers';

const ratio = 16 / 9;

export default function PostType1() {
	return (
		<Box
			shadow="2"
			rounded="lg"
			w={{ base: "64", md: "80", lg: "md" }}
			_light={{ bg: "coolGray.50" }}
			_dark={{ bg: "gray.700" }}
		>
			<AspectRatio w="100%" ratio={ratio}>
				<img src={HeroImg} alt=" base" />
			</AspectRatio>
			<Typography bold position="absolute" color="coolGray.50" top="0" m="4">
				NEWS
			</Typography>
			<Stack space="2" p="4">
				<Typography color="gray.400">April 13, 2024</Typography>
				<Typography size={["md", "lg", "md"]} variant="h2" fontWeight="medium">
					The Garden City
				</Typography>
				<Typography isTruncated noOfLines={["4", "4", "4"]}>
					Bengaluru (also called Bangalore) is the center of India's
					high-tech industry. It is located in southern India on the Deccan
					Plateau.The city is also known for its parks and nightlife.
					Bangalore is the major center of India's IT industry, popularly
					known as the Silicon Valley of India.
				</Typography>
			</Stack>
			<HStack space="3" px="4" pb="4">
				<MoreIcon _light={{ color: "emerald.800" }} _dark={{ color: "emerald.300" }} />
				<Typography _light={{ color: "emerald.800" }} _dark={{ color: "emerald.300" }}>
					Find out more
				</Typography>
			</HStack>
		</Box>
	);
}