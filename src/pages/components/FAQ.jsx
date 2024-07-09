import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

const items = [
  {
    panel: 'panel1',
    question: 'How do I contact customer support if I have a question or issue?',
    answer: 'You can reach our customer support team by emailing support@email.com or calling our toll-free number. We\'re here to assist you promptly.',
  },
  {
    panel: 'panel2',
    question: 'Can I return the product if it doesn\'t meet my expectations?',
    answer: 'Absolutely! We offer a hassle-free return policy. If you\'re not completely satisfied, you can return the product within 30 days for a full refund or exchange.',
  },
  {
    panel: 'panel3',
    question: 'What makes your product stand out from others in the market?',
    answer: 'Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.',
  },
  {
    panel: 'panel4',
    question: 'Is there a warranty on the product, and what does it cover?',
    answer: 'Yes, our product comes with a 1-year warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.',
  },
  {
    panel: 'panel5',
    question: 'How long does it take to ship my order?',
    answer: 'Orders are typically processed and shipped within 2-3 business days. Delivery times vary depending on your location and shipping method selected.',
  },
  {
    panel: 'panel6',
    question: 'Are there any ongoing promotions or discounts?',
    answer: 'Yes, we frequently offer promotions and discounts. You can check our website or sign up for our newsletter to stay updated on the latest deals and offers.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Divider sx={{
        width: '100%', mb: 3
      }} /> {/* Sección con un divisor para mayor claridad */}
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          textAlign: 'center', // Alineación central para una mejor presentación
          mb: { xs: 2, sm: 4 }, // Espaciado inferior
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Divider sx={{ width: '100%', mb: 1 }} /> {/* Sección con un divisor para mayor claridad */}

      <Box sx={{ width: '100%' }}>
        {items.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            sx={{
              border: '1px solid gray.100',
              boxShadow: expanded === item.panel ? 4 : 1 // Agregar un pequeño efecto de sombra cuando está expandido 
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.panel}d-content`} // Para accesibilidad
              id={`${item.panel}d-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
