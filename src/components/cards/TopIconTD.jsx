import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function TopIconTD({ content, index, selected, onClick, border = true }) {
  return (
    <Card
      direction="column"
      key={index}
      index={index}
      variant={border ? 'outlined' : 'elevation'} // Cambia el tipo de card según el borde
      component={Button}
      onClick={onClick}
      sx={{
        p: 2,
        height: 'fit-content',
        width: '100%',
        background: 'none',
        backgroundColor: selected ? 'action.hover' : undefined,
        borderColor: border
          ? (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
          : 'transparent', // Si `border` es falso, no se muestra
        boxShadow: !border ? '4px 4px 12px 3px rgba(0, 0, 0, 0.5)' : 0, // Aplica sombra si `border` es falso
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          gap: 2.5,
        }}
      >
        <Box
          sx={{
            color: (theme) => {
              if (theme.palette.mode === 'light') {
                return selected ? 'primary.main' : 'grey.300';
              }
              return selected ? 'primary.main' : 'grey.700';
            },
            my: 2,
          }}
        >
          {content.icon}
        </Box>
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
              event.stopPropagation(); // Evita que el click se propague
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

export default TopIconTD;
