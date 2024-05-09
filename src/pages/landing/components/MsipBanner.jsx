import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import backgroundImage from '../../../assets/arnica-tech.png';

const Banner = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Spaces items evenly
        padding: '40px',
        backgroundColor: 'background.default',
        borderRadius: '8px',
        flexWrap: 'wrap', // Ensure content wraps on smaller screens
              boxShadow: (theme) => {
                return theme.palette.mode === 'light'
                  ? '1px 1px 8px 4px rgba(0, 0, 0, 0.2)' // Sombra para modo claro
                  : '1px 1px 8px 4px rgba(0, 200, 255, 0.3)'; // Sombra para modo oscuro
              },      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          height: 200,
          width: 200,
          backgroundImage: `url(${backgroundImage})`, // Background image
          backgroundSize: 'cover', // Cover entire area
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // No repetition
          borderRadius: '50%', // Circular border
          marginRight: 5, // Add spacing between image and text
        }}
      />
      
      {/* Text Box */}
      <Box sx={{ flex: 1, maxWidth: '600px' }}>
        <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
          Welcome to MSIP
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          MSIP is an innovative component designed to optimize processes and 
          boost productivity of Emma. Discover how it can transform your workflow.
        </Typography>
      </Box>

      {/* Button */}
      <Box
        sx={{
          marginLeft: 'auto', // Align button to the right
          mt: { xs: 3, sm: 0 }, // Add margin-top on smaller screens for spacing
        }}
      >
        <Button variant="contained" color="primary" sx={{ textTransform: 'none', marginLeft:5}}>
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Banner;
