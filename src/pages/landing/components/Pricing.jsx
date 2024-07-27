import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const userTiers = [
  {
    title: 'Bronze',
    price: '0',
    description: [
      '20 requests per hour',
      '5 image generations per hour',
      '10GB of storage',
      'Basic email support',
    ],
    buttonText: 'Choose Bronze Plan',
    buttonVariant: 'outlined',
  },
  {
    title: 'Silver',
    price: '30',
    description: [
      '100 requests per hour',
      '20 image generations per hour',
      '100GB of storage',
      'Priority email support',
      '1 additional service',
      'Shared with 1 person',
    ],
    buttonText: 'Choose Silver Plan',
    buttonVariant: 'contained',
  },
  {
    title: 'Platinum',
    price: '50',
    description: [
      '200 requests per hour',
      '40 image generations per hour',
      '250GB of storage',
      'Priority email and chat support',
      'Monthly personalized consultation',
      '+3 additional services',
      'Shared with 3 people',
    ],
    buttonText: 'Choose Platinum Plan',
    buttonVariant: 'outlined',
  },
  {
    title: 'Diamond',
    price: '100',
    description: [
      'Unlimited requests per hour',
      '100 image generations per hour',
      '1.5TB of storage',
      '24/7 support via email, chat, and phone',
      'Weekly personalized consultation',
      'Custom integration with existing systems',
      '+5 additional services',
      'Shared with 5 people',
    ],
    buttonText: 'Choose Diamond Plan',
    buttonVariant: 'outlined',
  },
];

const enterpriseTier = {
  title: 'Enterprise',
  price: '',
  description: [
    'Unlimited requests per hour',
    'Unlimited image generations per hour',
    'As needed storage',
    '24/7 support via email, chat, phone, and personalized consultation',
    'Custom integration with existing systems',
    'As needed additional services',
    'Shared as needed',
  ],
  buttonText: 'Contact Sales',
  buttonVariant: 'outlined',
};




export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        py: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Pricing
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 4, sm: 6 }, mt: 2 }}>
          Our pricing is tailored to your unique needs, so you only pay for the services and features you choose. If you're looking for convenience, we also offer pre-built packages designed to suit a range of common requirements.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {userTiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium+' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Standard' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Standard' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Standard'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Standard' ? 'color.' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Standard' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Standard' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Standard'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Standard' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
