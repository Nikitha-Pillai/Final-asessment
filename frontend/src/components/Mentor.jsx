import { Button, Card, CardContent, CardMedia, Typography, CardActions, Grid } from '@mui/material'
import React from 'react'

export const Mentor = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 10, paddingX: 2, justifyContent: 'center' }}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Dr. Aparna"
            height="300"
            image="https://www.shutterstock.com/image-photo/confident-smiling-mature-indian-businesswoman-260nw-2287376057.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dr. Aparna
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Dr. Aparna has a PhD in Organizational Psychology from the UK and is researching about Indian women and Generation Y employment for UNDP.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Field: Psychologist
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Phone: 9157353467
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Email: aparna@example.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
              Contact
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="John Doe"
            height="300"
            image="https://t4.ftcdn.net/jpg/03/06/77/05/360_F_306770593_EqCJr8JksJZdLEbWt91KJJmWcK4vubqy.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              John Doe
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              John Doe is an expert in engineering, providing career counseling for students. He has worked with global educational institutions.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Field: Engineer
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Phone: 9876543210
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Email: john.doe@example.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
              Contact
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Sarah Lee"
            height="300"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kiran_Mazumdar-Shaw_HD2014_crop.jpg/640px-Kiran_Mazumdar-Shaw_HD2014_crop.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sarah Lee
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sarah Lee specializes in biotechnology, helping students navigate their educational journey in science and technology.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Field: Biotechnologist
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Phone: 8765432109
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Email: sarah.lee@example.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
              Conatct
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 4 */}
      <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Dr. Emily Shane"
            height="300"
            image="https://media.istockphoto.com/id/1326920136/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=tDhOPNMfBUlZLy5titrUrOXfHVbhVosEoQveTwuuL1Y="
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dr. Emily Shane
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Dr. Emily Shane is a certified career coach who focuses on careers in law and student development.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Field: Lawyer
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Phone: 8765432110
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Email: emily.shane@example.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
              Contact
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 5 */}
      <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Dr. Roshan George"
            height="300"
            image="https://www.shutterstock.com/image-photo/closeup-portrait-young-smiling-hispanic-260nw-2327799157.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dr. Roshan George
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Dr. Roshan George specializes in career counseling for students in interior design and the arts.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Field: Interior Designer
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Phone: 9876543110
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Email: roshan.george@example.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ backgroundColor: '#007BFF', color: 'white', '&:hover': { backgroundColor: '#0056b3' } }}>
              Contact
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}