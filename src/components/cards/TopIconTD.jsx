import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function TopIconTD({ content, index, selected=false, onClick, border = true }) {
  return (
    <Card
      key={index}
      variant={border ? 'outlined' : 'elevation'}
      component={Button}
      onClick={onClick}
      sx={{
        p: 2,
        height: 'fit-content',
        width: '100%',
        background: 'none',
        borderColor: border
          ? (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
          : 'transparent',
        boxShadow: !border
          ? (theme) =>
              theme.palette.mode === 'light'
                ? '1px 1px 8px 4px rgba(0, 0, 0, 0.2)'
                : '1px 1px 8px 4px rgba(255, 255, 255, 0.05)'
          : 0,
        transition: 'color 0.3s', // Transición suave
        '&:hover': {
          backgroundColor: 'action.hover', // Cambiar el color de fondo en hover
          color: 'primary.main', // Cambiar el color del texto
        },
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
          textAlign: 'center',
          my: 1 ,
          color: selected ? 'primary.main' : 'inherit', // Se hereda el color del padre
          }}
          fontSize={10}
        >
          {content.icon}
        </Box>
        <Box sx={{ textTransform: 'none', my:2 }}>
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
