import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, TextField, Grid } from '@mui/material';

const flats = [
  { name: '2BHK Apartment', price: '₹2200/month', location: 'BiharSharif' },
  { name: '3BHK Flat', price: '₹2500/month', location: 'Nawada' },
  { name: 'Studio Apartment', price: '₹1800/month', location: 'Rajgir' },
  // Add more flat listings here
];

const FlatBooking = () => {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredFlats = flats.filter(flat => 
    (location === '' || flat.location.toLowerCase().includes(location.toLowerCase())) &&
    (maxPrice === '' || parseInt(flat.price.replace(/\D/g, '')) <= parseInt(maxPrice))
  );

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Flat Booking
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
            label="Max Price (₹/month)"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <List>
        {filteredFlats.map((flat, index) => (
          <ListItem key={index}>
            <ListItemText primary={flat.name} secondary={`Price: ${flat.price}, Location: ${flat.location}`} />
            <Button variant="contained" color="primary">
              Book Now
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FlatBooking;
