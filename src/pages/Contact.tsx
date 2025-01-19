import { Box, Button, TextField, Typography, Grid, Paper, Container } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactPage = () => {
  const lat = 32 + 25 / 60 + 51.6 / 3600; // Convert to decimal coordinates
  const lng = 35 + 2 / 60 + 3.9 / 3600; // Convert to decimal coordinates

  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <Box sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#003366', marginBottom: '20px' }}>
          Get in Touch
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: '#003366', marginBottom: '30px' }}>
          We would love to hear from you! Drop us a message and we’ll get back to you as soon as possible.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: '30px', borderRadius: '8px', boxShadow: 3, backgroundColor: 'white' }}>
              <Typography variant="h5" sx={{ marginBottom: '20px', color: '#003366', fontWeight: 'bold' }}>
                Send us a Message
              </Typography>

              <form>
                <TextField fullWidth label="Your Name" variant="outlined" sx={{ marginBottom: '15px' }} />
                <TextField fullWidth label="Your Email" variant="outlined" type="email" sx={{ marginBottom: '15px' }} />
                <TextField fullWidth label="Message" variant="outlined" multiline rows={4} sx={{ marginBottom: '25px' }} />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    padding: '12px',
                    fontSize: '18px',
                    textTransform: 'none',
                    backgroundColor: '#003366',
                    "&:hover": {
                      backgroundColor: '#00509E',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: '30px', borderRadius: '8px', boxShadow: 3, backgroundColor: 'white' }}>
              <Typography variant="h5" sx={{ marginBottom: '20px', color: '#003366', fontWeight: 'bold' }}>
                Contact Information
              </Typography>

              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ color: '#003366' }}>
                  Email:
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Yanyana.group@gmail.com
                </Typography>
              </Box>

              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ color: '#003366' }}>
                  Phone:
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  +972 52-863-9970
                </Typography>
              </Box>

              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ color: '#003366' }}>
                  Address:
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Baqa El-Gharbeyya, Wadi El-Kharobe Street
                </Typography>
              </Box>

              {/* Google Map embed */}
              <Box sx={{ height: '300px', width: '100%', backgroundColor: '#e0e0e0', borderRadius: '8px' }}>
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
