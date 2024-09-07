import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';

const webinars = [
  {
    title: 'Psychology Webinar',
    description: 'Join our webinar to explore the latest trends and research in psychology. This session will cover key topics such as mental health, behavioral science, and career opportunities in the field of psychology.',
    conductedBy: 'Dr. Aparna, a leading expert in Organizational Psychology with extensive research experience.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKM8KOqZ_zYOLOb840Nj4oSr9DNBFkXIo9g&s',
  },
  {
    title: 'Engineering Webinar',
    description: 'Discover the evolving world of engineering with our experts. Topics include the latest technologies, career paths, and opportunities in various engineering fields.',
    conductedBy: 'John Doe, an experienced engineer with a background in global educational consulting.',
    image: 'https://snco.com/wp-content/uploads/2022/01/tgjSOcz0fG7lTyTtGan2gBWfS8w3pLIb1642083141.jpg',
  },
  {
    title: 'Biotechnology Webinar',
    description: 'Explore advancements in biotechnology and its impact on modern science. This session will cover career opportunities, research innovations, and industry trends.',
    conductedBy: 'Sarah Lee, a specialist in biotechnology with expertise in guiding students in science and technology careers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaXjxZ8TRPTUpiy6ySKcFUHFscSZOjcEC-w&s',
  },
  {
    title: 'Law Career Webinar',
    description: 'Learn about the diverse career paths in law. This webinar will address educational requirements, career development, and opportunities in the legal field.',
    conductedBy: 'Dr. Emily Shane, a certified career coach focusing on law and student development.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-d-render-of-a-lawyer-s-office-with-a-judge-s-image_3888408.jpg',
  },
  {
    title: 'Interior Design Webinar',
    description: 'Get insights into the world of interior design. Topics include design principles, industry trends, and career opportunities in the field of interior design.',
    conductedBy: 'Dr. Roshan George, an expert in career counseling for interior design and the arts.',
    image: 'https://www.marshallsonline.in/smallImgOnProd/ZA%209276.jpg?id=10',
  },
];

export const Wshop = () => {
  return (
    <Grid container spacing={4} sx={{ marginTop: 10, paddingX: 2, justifyContent: 'center' }}>
      {webinars.map((webinar, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={webinar.image}
              title={webinar.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {webinar.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                {webinar.description}
              </Typography>
              <Typography variant="body2">
                Conducted by: {webinar.conductedBy}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
