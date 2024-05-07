// React components
import * as React from 'react';

// Material-UI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Material-UI icons
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import TopIconTD from '../../components/cards/TopIconTD'
import MsipBanner from '../components/MsipBanner'

//import Security from '../../assets/svg/security.svg?react';

const MainFeatures = [
  // Security Features
  {
    category: 'Security Features',
    icon: <LockRoundedIcon />,
    title: 'Advanced Security Protocols',
    description: 'Protect your data with advanced security protocols, including encryption and multi-factor authentication.',
  },

  // Privacy Features
  {
    category: 'Privacy Features',
    icon: <VisibilityOffRoundedIcon />,
    title: 'Robust Privacy Controls',
    description: 'Gain full control over your personal information and choose how it\'s shared.',
  },

  // User-Centric Features
  {
    category: 'User-Centric Features',
    icon: <GroupRoundedIcon />,
    title: 'User Feedback Integration',
    description: 'We integrate your feedback to improve the product and adapt it to your needs.',
  },

  // Portable Features
  {
    category: 'Portable Features',
    icon: <LaptopRoundedIcon />,
    title: 'Compact and Portable Design',
    description: 'Enjoy a compact and portable design that allows you to take your tools anywhere.',
  },

  // Interoperability Features
  {
    category: 'Interoperability Features',
    icon: <SyncAltRoundedIcon />,
    title: 'Seamless Integration with Other Tools',
    description: 'Integrate with popular tools and services for a seamless experience across platforms.',
  },
];



export default function Features() {

  const rowCount = Math.ceil(MainFeatures.length / 2);
  const isLastRowSingle = (MainFeatures.length % 2) === 1;

  return (
    <Container
      id="features"
      sx={{
        py: { xs: 8, sm: 16 },
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={8} ml={8} >
          <Box>
            <Typography component="h2" variant="h4" color="text.primary">
              Features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={{ mb: { xs: 4, sm: 6 }, mt:2}}
            >
            Our applications are designed with five core features in mind: adaptability, intuitive design, innovation, precision, and reliable customer support. Explore how these attributes make our products stand out in the market.
            </Typography>
          </Box>
        </Grid>
        <Grid 
          container 
          mx={10} 
          spacing={2}
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '16px',
          }}
        >
          {MainFeatures.map((content, index) => {
            const isLastItem = index === MainFeatures.length - 1;

            return (
              <Grid 
                item 
                key={index}
                sx={{
                  ...(isLastItem && isLastRowSingle && {
                    gridColumn: '1 / -1',
                    justifySelf: 'center',
                  }),
                }}
              >
                <TopIconTD content={content} index={index} border={false} />
              </Grid>
            );
          })}
        </Grid>         
      </Grid>
      <Box mx={12} mt={12}>
      <MsipBanner/>
      </Box>
    </Container>
  );
}
