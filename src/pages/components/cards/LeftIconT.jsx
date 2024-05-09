import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';

function LeftIconT({ content, index, selected, onClick }) {
    const backgroundImage = content.background_url
    ? `url(${content.background_url})`
    : 'none';
  return (
    <Card
      key={index}
      variant="outlined"
      component={Button}
      onClick={onClick}
      sx={{
        p: 2,
        height: 'fit-content',
        width: '100%',
        backgroundImage: backgroundImage, // Setting the background image
        backgroundSize: 'cover', // Ensure the image covers the whole area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents image repetition
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            color: selected ? 'primary.main' : 'inherit', // Se hereda el color del padre
            marginRight:3
          }}
        >
          {content.icon}
        </Box>
        <Box sx={{ textTransform: 'none' }}>
          <Typography
            color="text.primary"
            variant="body1"
            fontSize={30}
            fontWeight="bold"
            gutterBottom
          >
            {content.title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default LeftIconT;
