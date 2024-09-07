import React, { useState } from 'react';
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PersonalityQuiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Career Personality Quiz
      </Typography>
      <Box sx={{ mt: 3 }}>
        {currentQuestion === 1 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">1. What type of work environment do you thrive in?</FormLabel>
            <RadioGroup name="question1" value={answers.question1} onChange={handleChange}>
              <FormControlLabel value="Structured" control={<Radio />} label="Structured – Clear roles and responsibilities, organized workflow." />
              <FormControlLabel value="Collaborative" control={<Radio />} label="Collaborative – Team-based work, frequent interaction with others." />
              <FormControlLabel value="Flexible" control={<Radio />} label="Flexible – Freedom to work on your own terms and schedule." />
              <FormControlLabel value="Fast-Paced" control={<Radio />} label="Fast-Paced – Dynamic and constantly changing, with new challenges every day." />
            </RadioGroup>
          </FormControl>
        )}
        {currentQuestion === 2 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">2. How do you prefer to solve problems?</FormLabel>
            <RadioGroup name="question2" value={answers.question2} onChange={handleChange}>
              <FormControlLabel value="Analytically" control={<Radio />} label="Analytically – Breaking down complex issues using logic and data." />
              <FormControlLabel value="Creatively" control={<Radio />} label="Creatively – Thinking outside the box and finding innovative solutions." />
              <FormControlLabel value="Practically" control={<Radio />} label="Practically – Using hands-on experience and proven methods." />
              <FormControlLabel value="Strategically" control={<Radio />} label="Strategically – Planning ahead and considering long-term outcomes." />
            </RadioGroup>
          </FormControl>
        )}
        {currentQuestion === 3 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">3. When working on a project, how do you manage tasks?</FormLabel>
            <RadioGroup name="question3" value={answers.question3} onChange={handleChange}>
              <FormControlLabel value="Prioritizing" control={<Radio />} label="Prioritizing – Focus on high-impact tasks first and work systematically." />
              <FormControlLabel value="Multitasking" control={<Radio />} label="Multitasking – Work on multiple tasks simultaneously to maximize productivity." />
              <FormControlLabel value="Delegating" control={<Radio />} label="Delegating – Assign tasks to team members and manage the overall process." />
              <FormControlLabel value="Collaborating" control={<Radio />} label="Collaborating – Share responsibilities equally with others to achieve goals together." />
            </RadioGroup>
          </FormControl>
        )}
        {currentQuestion === 4 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">4. What motivates you the most in a career?</FormLabel>
            <RadioGroup name="question4" value={answers.question4} onChange={handleChange}>
              <FormControlLabel value="Career Growth" control={<Radio />} label="Career Growth – Opportunities for advancement and learning new skills." />
              <FormControlLabel value="Creativity" control={<Radio />} label="Creativity – The freedom to express yourself and innovate." />
              <FormControlLabel value="Stability" control={<Radio />} label="Stability – Job security and a predictable work-life balance." />
              <FormControlLabel value="Impact" control={<Radio />} label="Impact – Making a difference in people's lives or in the community." />
            </RadioGroup>
          </FormControl>
        )}
        {currentQuestion === 5 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">5. How do you prefer to learn new skills?</FormLabel>
            <RadioGroup name="question5" value={answers.question5} onChange={handleChange}>
              <FormControlLabel value="Hands-on" control={<Radio />} label="Hands-on – Through hands-on experience and practice." />
              <FormControlLabel value="Research-based" control={<Radio />} label="Research-based – By researching and analyzing information." />
              <FormControlLabel value="Creative Projects" control={<Radio />} label="Creative Projects – Through creative projects and experimentation." />
              <FormControlLabel value="Structured Learning" control={<Radio />} label="Structured Learning – Following structured courses and guidelines." />
            </RadioGroup>
          </FormControl>
        )}

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleBack} disabled={currentQuestion === 1}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {currentQuestion === 5 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalityQuiz;




