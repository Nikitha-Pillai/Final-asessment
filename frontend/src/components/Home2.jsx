import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

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

const Home2 = () => {
  return (
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
            <Button size="small" variant="contained">GO</Button>
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
            <Button size="small" variant="contained">GO</Button>
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
            <Button size="small" variant="contained">GO</Button>
          </CardActions>
        </OverlayContent>
      </StyledCard>
    </Box>
  );
};

export default Home2;
