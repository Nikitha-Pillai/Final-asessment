import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginTop: '100px', // Added margin-top to move it down
});

const Logo = styled('img')({
  width: '100px',
  display: 'block',
  margin: '0 auto 1rem',
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Example login handling (replace with actual logic)
    console.log('Logging in with:', email, password);
    setError(''); // Clear error if login is successful
  };

  return (
    <Container maxWidth="xs">
      <StyledCard>
        <Logo src="https://e7.pngegg.com/pngimages/531/439/png-clipart-trp-recruitment-graphic-design-job-logo-career-coach-mobile-phones-area-thumbnail.png" alt="Logo" />
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <CardContent>
          <Box component="form" onSubmit={handleLogin} noValidate>
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
              Login
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default LoginPage;
