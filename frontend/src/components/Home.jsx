import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import axios from 'axios';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/get');
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ marginTop: 15 }}>
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="200"  // Increased height
                image={card.img_url || "/static/images/cards/default.jpg"}  // Fallback image if `img_url` is not provided
                sx={{ width: '100%' }}  // Ensures the image fits the width of the Card
              />
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', marginTop: 0.5 }}>
                    {card.content}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: '0.1px' }}>
                    {card.title}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-start', padding: '8px 16px' }}>
                <Button size="small" sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkPurple' }, marginRight: 1 }}>
                  Delete
                </Button>
                <Button size="small" sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkPurple' } }}>
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
