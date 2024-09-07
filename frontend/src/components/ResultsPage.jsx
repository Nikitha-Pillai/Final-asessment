import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const calculateResults = (answers) => {
  const traitScores = {
    Creative: 0,
    Analytical: 0,
    Practical: 0,
    Collaborative: 0,
    Organized: 0,
    Dynamic: 0,
    Strategic: 0,
    GrowthOriented: 0,
    Stable: 0,
    ImpactDriven: 0,
    Innovative: 0,
    Supportive: 0,
    Structured: 0
  };

  // Question 1 mapping (Work Environment)
  switch (answers.question1) {
    case 'Structured':
      traitScores.Organized += 1;
      break;
    case 'Collaborative':
      traitScores.Collaborative += 1;
      break;
    case 'Flexible':
      traitScores.Dynamic += 1;
      break;
    case 'Fast-Paced':
      traitScores.Dynamic += 1;
      break;
    default:
      break;
  }

  // Question 2 mapping (Problem Solving)
  switch (answers.question2) {
    case 'Analytically':
      traitScores.Analytical += 1;
      break;
    case 'Creatively':
      traitScores.Creative += 1;
      break;
    case 'Practically':
      traitScores.Practical += 1;
      break;
    case 'Strategically':
      traitScores.Strategic += 1;
      break;
    default:
      break;
  }

  // Question 3 mapping (Task Management)
  switch (answers.question3) {
    case 'Prioritizing':
      traitScores.Organized += 1;
      break;
    case 'Multitasking':
      traitScores.Dynamic += 1;
      break;
    case 'Delegating':
      traitScores.Collaborative += 1;
      break;
    case 'Collaborating':
      traitScores.Collaborative += 1;
      break;
    default:
      break;
  }

  // Question 4 mapping (Career Motivation)
  switch (answers.question4) {
    case 'Career Growth':
      traitScores.GrowthOriented += 1;
      break;
    case 'Creativity':
      traitScores.Creative += 1;
      break;
    case 'Stability':
      traitScores.Stable += 1;
      break;
    case 'Impact':
      traitScores.ImpactDriven += 1;
      break;
    default:
      break;
  }

  // Question 5 mapping (Learning Style)
  switch (answers.question5) {
    case 'Hands-on':
      traitScores.Practical += 1;
      break;
    case 'Research-based':
      traitScores.Analytical += 1;
      break;
    case 'Creative Projects':
      traitScores.Creative += 1;
      break;
    case 'Structured Learning':
      traitScores.Organized += 1;
      break;
    default:
      break;
  }

  // Normalize scores to percentages
  const totalAnswers = Object.values(traitScores).reduce((acc, score) => acc + score, 0);
  return totalAnswers > 0
    ? Object.keys(traitScores).map((trait) => ({
        name: trait,
        value: (traitScores[trait] / totalAnswers) * 100
      }))
    : [];
};

const jobSuggestions = (data) => {
  const maxTrait = data.reduce((max, trait) => (trait.value > max.value ? trait : max), data[0]).name;
  switch (maxTrait) {
    case 'Creative':
      return ['Interior Designer', 'Biotechnologist'];
    case 'Analytical':
      return ['Engineer', 'Lawyer'];
    case 'Practical':
      return ['Biotechnologist', 'Engineer'];
    case 'Collaborative':
      return ['Psychologist', 'Interior Designer'];
    case 'Organized':
      return ['Engineer', 'Lawyer'];
    case 'Dynamic':
      return ['Biotechnologist', 'Interior Designer'];
    case 'Strategic':
      return ['Lawyer', 'Engineer'];
    case 'GrowthOriented':
      return ['Engineer', 'Psychologist'];
    case 'Stable':
      return ['Psychologist', 'Lawyer'];
    case 'ImpactDriven':
      return ['Psychologist', 'Biotechnologist'];
    default:
      return [];
  }
};

const jobDetailsMap = {
  'Interior Designer': {
    courses: ['Design Fundamentals', 'Color Theory', 'CAD'],
    topColleges: ['Rhode Island School of Design', 'Parsons School of Design'],
    pros: ['Creative Freedom', 'High Demand'],
    cons: ['High Competition', 'Client Dependence']
  },
  'Biotechnologist': {
    courses: ['Biology', 'Genetics', 'Biochemistry'],
    topColleges: ['Stanford University', 'Harvard University'],
    pros: ['Innovative Field', 'High Impact'],
    cons: ['Expensive Education', 'Laboratory Work']
  },
  'Engineer': {
    courses: ['Mathematics', 'Physics', 'Engineering Fundamentals'],
    topColleges: ['MIT', 'University of California, Berkeley'],
    pros: ['High Salary', 'Diverse Opportunities'],
    cons: ['Long Education Period', 'Stressful Deadlines']
  },
  'Lawyer': {
    courses: ['Law', 'Ethics', 'Legal Writing'],
    topColleges: ['Harvard Law School', 'Yale Law School'],
    pros: ['High Earning Potential', 'Respectable Profession'],
    cons: ['Stressful Work Environment', 'Long Hours']
  },
  'Psychologist': {
    courses: ['Psychology', 'Statistics', 'Human Behavior'],
    topColleges: ['University of Chicago', 'University of California, Los Angeles'],
    pros: ['Helping Others', 'Diverse Specializations'],
    cons: ['Emotional Strain', 'Long Education Path']
  }
};

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.answers) {
    navigate('/');
    return null;
  }

  const { answers } = location.state;
  const data = calculateResults(answers);
  const suggestedJobs = jobSuggestions(data);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Personality Results
      </Typography>
      <Box sx={{ mt: 3, height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300'][index % 4]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Based on your results, you might be interested in the following careers:
        </Typography>
        {suggestedJobs.map((job, index) => (
          <Paper key={index} elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              {job}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Courses Recommended" secondary={jobDetailsMap[job].courses.join(', ')} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Top Universities" secondary={jobDetailsMap[job].topColleges.join(', ')} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Pros" secondary={jobDetailsMap[job].pros.join(', ')} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Cons" secondary={jobDetailsMap[job].cons.join(', ')} />
              </ListItem>
            </List>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ResultsPage;