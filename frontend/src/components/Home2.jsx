import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// StyledCard for the "Personality Quiz", "Game", "Mentoring Sessions" section
const StyledCard = styled(Card)({
  position: 'relative',
  maxWidth: 1100,
  width: '100%',
  minHeight: 350,
});

const OverlayContent = styled(CardContent)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 20,
  color: 'white', // Adjust text color for better visibility on image
  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

// Testimonial data array
const testimonials = [
  
  {
    name: 'Robin',
    role: 'Visionaries Success Story',
    testimonial: 'Thanks to Visionaries, I had personalized guidance that made my career decisions so much clearer.',
    avatarUrl: 'https://img.freepik.com/free-photo/portrait-caucasian-man-with-arms-crossed_53876-13490.jpg',
  },
  {
    name: 'Meera',
    role: '',
    testimonial: 'Visionaries helped Meera break free from doubts and follow a career path that aligns with her passions.',
    avatarUrl: 'https://media.istockphoto.com/id/1340045749/photo/close-up-portrait-of-caucasian-woman.jpg?s=612x612&w=0&k=20&c=nGl9ZEJzY2h1B_Ohlof2fnOQROIfq-CboPhVBLqtd3s=',
    isStory: true
  },
  {
    name: 'Sahil',
    role: 'Recent Graduate',
    testimonial: 'With Visionaries’ expert advice, I found a career path I’m truly excited about right after graduation.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y_HdFde3G1C55jB2oAt9roHNRUGY3WTdng&s',
  }
];

// TestimonialCard component
const TestimonialCard = ({ name, role, testimonial, avatarUrl, isStory }) => (
  <Card style={{ height: '100%' }}>
    <CardContent>
      <Typography variant="body1" gutterBottom>
        {testimonial}
      </Typography>
      <Grid container alignItems="center" style={{ marginTop: '1rem' }}>
        <Grid item>
          <Avatar alt={name} src={avatarUrl} />
        </Grid>
        <Grid item style={{ marginLeft: '1rem' }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {role}
          </Typography>
        </Grid>
      </Grid>
      {isStory && (
        <Typography variant="body2" style={{ marginTop: '1rem', color: 'blue', cursor: 'pointer' }}>
          Read Full Story
        </Typography>
      )}
    </CardContent>
  </Card>
);

// TestimonialsGrid component
const TestimonialsGrid = () => (
  <Grid container spacing={3}>
    {testimonials.map((testimonial, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <TestimonialCard {...testimonial} />
      </Grid>
    ))}
  </Grid>
);

const Home2 = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleMentoringClick = () => {
    navigate('/mentor'); // Navigate to the /mentor route
  };
  const handleGameClick = () => {
    navigate('/add'); // Navigate to the /add route
  };

  const handleQuizClick = () => {
    navigate('/quiz'); // Navigate to the /quiz route
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Align cards vertically
          alignItems: 'center', // Center cards horizontally
          padding: 2,
          gap: 4, // Space between cards
        }}
      >
        {/* First Card */}
        <StyledCard>
          <CardMedia
            component="img"
            sx={{ height: 350, width: '100%' }}
            image="https://oecdedutoday.com/wp-content/uploads/2021/10/Career-readiness-project-findings-blog.png"
            title="Personality Quiz"
          />
          <OverlayContent>
            <Typography gutterBottom variant="h5" component="div">
              Personality Quiz
            </Typography>
            <Typography variant="body2">
              Discover your Perfect Career Match!
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" variant="contained" onClick={handleQuizClick}>GO</Button>
            </CardActions>
          </OverlayContent>
        </StyledCard>

        {/* Second Card */}
        <StyledCard>
          <CardMedia
            component="img"
            sx={{ height: 350, width: '100%' ,marginTop: '5px'}}
            image="https://www.whizqiz.com/wp-content/uploads/2021/05/career-page-images-05.png"
            title="Game"
          />
          <OverlayContent>
            <Typography gutterBottom variant="h5" component="div">
              Game
            </Typography>
            <Typography variant="body2">
              DreamJob Discovery!
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" variant="contained" onClick={handleGameClick}>GO</Button>
            </CardActions>
          </OverlayContent>
        </StyledCard>

        {/* Third Card */}
        <StyledCard>
          <CardMedia
            component="img"
            sx={{ height: 350, width: '100%' ,marginTop: '5px'}}
            image="https://static.vecteezy.com/system/resources/previews/001/643/929/non_2x/career-guidance-line-up-vector.jpg"
            title="Mentoring Sessions"
          />
          <OverlayContent>
            <Typography gutterBottom variant="h5" component="div">
              Mentoring Sessions
            </Typography>
            <Typography variant="body2">
              Personalized mentoring to discover your ideal career path!
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" variant="contained" onClick={handleMentoringClick}>GO</Button>
            </CardActions>
          </OverlayContent>
        </StyledCard>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '4rem' }}>
        <Typography variant="h5" gutterBottom>
          Success Stories!
        </Typography>
        <TestimonialsGrid />
      </Box>
    </div>
  );
};

export default Home2;
