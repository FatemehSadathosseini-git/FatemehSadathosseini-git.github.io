import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Link,
} from '@mui/material';
import { School, Work, CheckCircle, LocationOn, Email, LinkedIn, Language } from '@mui/icons-material';
import resumeData from './resume.data.json';

const Resume: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: { xs: 0, md: 4 }, p: { xs: 0, md: 2 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 90, md: 200 },
              backgroundImage: 'url("header.jpg")',
              backgroundSize: 'center',
              backgroundPosition: 'top',
              mb: { xs: 3, md: 4 },
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mb: -4,
                bgcolor: '#3f51b5',
                fontSize: '2.5rem',
                border: '2px solid white',
              }}
            >
              <img src="avatar.jpeg" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Avatar>
          </Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {resumeData.name}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn color="info" fontSize='small' />
            <Typography variant="body2">{resumeData.contact.location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Email color="info" fontSize='small' />
            <Typography variant="body2" component={Link} href={`mailto:${resumeData.contact.email}`} color="inherit" underline="hover">
              {resumeData.contact.email}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <LinkedIn color="info" fontSize='small' />
            <Typography variant="body2" component={Link} href={resumeData.contact.linkedin} color="inherit" underline="hover">
              {resumeData.contact.linkedin}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Summary
        </Typography>
        <Typography variant="body1" paragraph>
          {resumeData.summary}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Education
        </Typography>
        <List>
          {resumeData.education.map((edu, index) => (
            <ListItem key={index} alignItems="flex-start">
              <School color="info" sx={{ mr: 2, mt: 1 }} />
              <ListItemText
                primary={edu.degree}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary">
                      {edu.institution}
                    </Typography>
                    {` — ${edu.dates}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Experience
        </Typography>
        <Stack spacing={2}>
          {resumeData.experience.map((exp, index) => (
            <Card key={index} elevation={2} variant='outlined' sx={{ display: 'flex' }}>
              <Work color="info" sx={{ ml: 1, mt: 2.4 }} />
              <Box>
                <CardHeader
                  title={exp.title}
                  subheader={`${exp.company} — ${exp.dates}`}
                />
                <CardContent>
                  <Typography variant="body2">{exp.description}</Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Certifications
        </Typography>
        <List>
          {resumeData.certifications.map((cert, index) => (
            <ListItem key={index} alignItems="flex-start">
              <CheckCircle color="success" sx={{ mr: 2, mt: 1 }} />
              <ListItemText
                primary={cert.name}
                secondary={cert.issuer}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Languages
        </Typography>
        <List>
          {resumeData.languages.map((lang, index) => (
            <ListItem key={index} alignItems="flex-start">
              <Language color="info" sx={{ mr: 2, mt: 1 }} />
              <ListItemText
                primary={lang.language}
                secondary={`Proficiency: ${lang.proficiency}`}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          Skills
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {resumeData.skills.map((skill, index) => (
            <Chip key={index} label={skill} color="primary" variant="outlined" />
          ))}
        </Box>
      </Paper>
      <Paper
        sx={{
          textAlign: 'center',
          mt: { xs: 2, md: 4 },
          py: { xs: 2, md: 3 },
          height: { xs: 100, md: 150 },
          background: 'linear-gradient(to bottom,rgb(61, 147, 190),rgb(29, 93, 112))',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Fatemeh Sadat Hosseini. All rights reserved.
        </Typography>
      </Paper>
    </Container >
  );
};

export default Resume;
