import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const jobs = [
  { title: 'Electrician Job', description: 'Looking for a certified electrician' },
  { title: 'Plumber Job', description: 'Experienced plumber required' },
  // Add more job vacancies here
];

const JobVacancies = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Job Vacancies
      </Typography>
      <List>
        {jobs.map((job, index) => (
          <ListItem key={index}>
            <ListItemText primary={job.title} secondary={job.description} />
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JobVacancies;
