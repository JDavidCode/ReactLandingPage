import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function LeftIconTD({ content, index, selected, onClick }) {
  const backgroundImage = content.background_url
    ? `url(${content.background_url})`
    : 'none';

  return (
    <Card
      component={Button}
      key={index}
      variant="outlined"
      onClick={onClick}
      sx={{
        p: '1rem 2rem',
        height: 'fit-content',
        width: '100%',
        backgroundImage: backgroundImage, // Setting the background image
        backgroundSize: 'cover', // Ensure the image covers the whole area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents image repetition
        backgroundColor: selected ? 'action.hover' : undefined,
        borderColor: (theme) => {
          return selected ? (theme.palette.mode === 'light' ? 'primary.light' : 'primary.dark') : 'grey.200';
        },
      }}
    >
      <Box sx={{
        color: selected ? 'primary.main' : 'grey.500',
        mr: 3,
      }}>
        {content.icon}
      </Box>
      <Box sx={{ textTransform: 'none' }}>
        <Typography
          color="text.primary"
          variant="body2"
          fontWeight="bold"
          gutterBottom
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
      </Box>
    </Card>
  );
}

export default LeftIconTD;
