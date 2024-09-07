import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledCard = styled(Card)({
  maxWidth: 500, // Increased width
  margin: 'auto',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginTop: '150px', // Increased margin-top to move it further down
});

const Logo = styled('img')({
  width: '120px', // Slightly larger logo
  display: 'block',
  margin: '0 auto 1rem',
});

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !phone || !username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Example sign-up handling (replace with actual logic)
    console.log('Signing up with:', email, phone, username, password);
    setError(''); // Clear error if sign-up is successful
  };

  return (
    <Container maxWidth="sm"> {/* Adjusted container width */}
      <StyledCard>
        <Logo src="https://e7.pngegg.com/pngimages/531/439/png-clipart-trp-recruitment-graphic-design-job-logo-career-coach-mobile-phones-area-thumbnail.png" alt="Logo" />
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <CardContent>
          <Box component="form" onSubmit={handleSignUp} noValidate>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              required
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              required
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              required
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              required
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default SignUpPage;

