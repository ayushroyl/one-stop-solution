import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Container, Typography, Card, CardContent } from '@mui/material';

const services = [
  { name: 'Electrician', path: '/service-form' },
  { name: 'Plumber', path: '/service-form' },
  { name: 'Carpenter', path: '/service-form' },
  { name: 'Home Tuition', path: '/service-form' },
  { name: 'Interior Design', path: '/service-form' },
  { name: 'Photography', path: '/service-form' },
  { name: 'Event Management', path: '/service-form' },
  { name: 'Halwai Booking', path: '/service-form' },
];

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        One Stop Solution For Your Problem
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.name}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  {service.name}
                </Typography>
                <Button
                  component={Link}
                  to={service.path}
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{ marginTop: '10px' }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Button component={Link} to="/job-vacancies" variant="outlined" color="secondary">
          Job Vacancies
        </Button>
        <Button component={Link} to="/car-booking" variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          Car Booking
        </Button>
        <Button component={Link} to="/flat-booking" variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          Flat Booking
        </Button>
      </div>
    </Container>
  );
};

export default Home;
