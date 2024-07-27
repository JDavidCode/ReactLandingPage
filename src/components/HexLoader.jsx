import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

// Define keyframes for the animations
const pulse00 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.01);
  }
  100% {
    transform: scale(1);
  }
`;

const fade00 = keyframes`
  0% {
    background: #252525;
  }
  50% {
    background: #fff;
  }
  100% {
    background: #353535;
  }
`;

// Styled component for HexBrick with animation
const HexBrick = styled(Box)(({ delay }) => ({
	backgroundColor: '#000000',
	width: '30px',
	height: '17px',
	position: 'absolute',
	top: '5px',
	animation: `${fade00} 2s infinite`,
}));

// Styled component for Gel with animation
const Gel = styled(Box)(({ delay }) => ({
	height: '30px',
	width: '30px',
	transition: 'all .3s',
	position: 'absolute',
	top: '50%',
	left: '50%',
	animation: `${pulse00} 1s infinite`,
	animationDelay: delay,
}));

const Socket = ({ children }) => (
	<Box
		className="socket"
		sx={{
			width: '200px',
			height: '200px',
			position: 'absolute',
			left: '50%',
			marginLeft: '-100px',
			top: '50%',
			marginTop: '-100px',
		}}
	>
		{children}
	</Box>
);

const HexGrid = () => {
	const gelStyles = {
		centerGel: {
			marginLeft: '-15px',
			marginTop: '-15px',
		},
		c1: { marginLeft: '-47px', marginTop: '-15px' },
		c2: { marginLeft: '-31px', marginTop: '-43px' },
		c3: { marginLeft: '1px', marginTop: '-43px' },
		c4: { marginLeft: '17px', marginTop: '-15px' },
		c5: { marginLeft: '-31px', marginTop: '13px' },
		c6: { marginLeft: '1px', marginTop: '13px' },
		c7: { marginLeft: '-63px', marginTop: '-43px' },
		c8: { marginLeft: '33px', marginTop: '-43px' },
		c9: { marginLeft: '-15px', marginTop: '41px' },
		c10: { marginLeft: '-63px', marginTop: '13px' },
		c11: { marginLeft: '33px', marginTop: '13px' },
		c12: { marginLeft: '-15px', marginTop: '-71px' },
		c13: { marginLeft: '-47px', marginTop: '-71px' },
		c14: { marginLeft: '17px', marginTop: '-71px' },
		c15: { marginLeft: '-47px', marginTop: '41px' },
		c16: { marginLeft: '17px', marginTop: '41px' },
		c17: { marginLeft: '-79px', marginTop: '-15px' },
		c18: { marginLeft: '49px', marginTop: '-15px' },
		c19: { marginLeft: '-63px', marginTop: '-99px' },
		c20: { marginLeft: '33px', marginTop: '-99px' },
		c21: { marginLeft: '1px', marginTop: '-99px' },
		c22: { marginLeft: '-31px', marginTop: '-99px' },
		c23: { marginLeft: '-63px', marginTop: '69px' },
		c24: { marginLeft: '33px', marginTop: '69px' },
		c25: { marginLeft: '1px', marginTop: '69px' },
		c26: { marginLeft: '-31px', marginTop: '69px' },
		c27: { marginLeft: '-79px', marginTop: '-15px' },
		c28: { marginLeft: '-95px', marginTop: '-43px' },
		c29: { marginLeft: '-95px', marginTop: '13px' },
		c30: { marginLeft: '49px', marginTop: '41px' },
		c31: { marginLeft: '-79px', marginTop: '-71px' },
		c32: { marginLeft: '-111px', marginTop: '-15px' },
		c33: { marginLeft: '65px', marginTop: '-43px' },
		c34: { marginLeft: '65px', marginTop: '13px' },
		c35: { marginLeft: '-79px', marginTop: '41px' },
		c36: { marginLeft: '49px', marginTop: '-71px' },
		c37: { marginLeft: '81px', marginTop: '-15px' },
	};

	return (
		<Socket>
			<Gel className="center-gel" style={gelStyles.centerGel}>
				<HexBrick className="h1" />
				<HexBrick className="h2" style={{ transform: 'rotate(60deg)' }} />
				<HexBrick className="h3" style={{ transform: 'rotate(-60deg)' }} />
			</Gel>
			{[...Array(37)].map((_, index) => (
				<Gel
					key={index}
					className={`c${index + 1} r${Math.floor(index / 6) + 1}`}
					style={gelStyles[`c${index + 1}`]}
					delay={`${(Math.floor(index / 6) + 1) * 0.2}s`}
				>
					<HexBrick className="h1" />
					<HexBrick className="h2" style={{ transform: 'rotate(60deg)' }} />
					<HexBrick className="h3" style={{ transform: 'rotate(-60deg)' }} />
				</Gel>
			))}
		</Socket>
	);
};

export default HexGrid;
