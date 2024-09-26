import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, TextField, Grid } from '@mui/material';

const cars = [
  { model: 'Maruti Suzuki', price: '₹3000/day', location: 'Patna' },
  { model: 'Alto', price: '₹3500/day', location: 'Bihar Sharif' },
  { model: 'Scorpio', price: '₹5000/day', location: 'Rajgir' },
  // Add more car listings here
];

const CarBooking = () => {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredCars = cars.filter(car => 
    (location === '' || car.location.toLowerCase().includes(location.toLowerCase())) &&
    (maxPrice === '' || parseInt(car.price.replace(/\D/g, '')) <= parseInt(maxPrice))
  );

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Car Booking
      </Typography>
      
      <Grid container spacing={2} justifyContent="center" marginBottom={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Max Price (₹/day)"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <List>
        {filteredCars.map((car, index) => (
          <ListItem key={index}>
            <ListItemText primary={car.model} secondary={`Price: ${car.price}, Location: ${car.location}`} />
            <Button variant="contained" color="primary">
              Book Now
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CarBooking;
