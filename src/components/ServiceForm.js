import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem } from '@mui/material';

const services = [
  'Electrician', 'Plumber', 'Carpenter', 'Home Tuition', 'Interior Design', 
  'Photography', 'Event Management', 'Halwai Booking'
];

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service booked successfully for ${formData.name}!`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Book a Service
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile No"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Full Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Select Service"
          name="service"
          select
          value={formData.service}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          {services.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ServiceForm;
