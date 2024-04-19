import React, { useEffect } from 'react';
import './Background.css';
import Box from '@mui/material/Box';

const Background = () => {
	useEffect(() => {

		const createSparkle = () => {
			const sparkle = document.createElement('div');
			sparkle.className = 'sparkle';
			sparkle.style.left = `${Math.random() * window.innerWidth * window.innerHeight}px}px`;
			sparkle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
			document.body.appendChild(sparkle);

			setTimeout(() => {
				document.body.removeChild(sparkle);
			}, 1500);
		};

		const interval = setInterval(createSparkle, 1000);

		return () => clearInterval(interval);
	}, []);

	return <Box className="background" sx={{ zIndex: '-2', width: '100vw', height: '100vh' }}></Box>;
};

export default Background;
