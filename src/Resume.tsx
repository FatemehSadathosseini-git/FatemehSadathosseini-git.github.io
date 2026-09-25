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
import { School, Work, CheckCircle, LocationOn, Email, LinkedIn, Language, Psychology, Code, SmartToy, Analytics, RecordVoiceOver, Group } from '@mui/icons-material';
import KuromiBanner from './KuromiBanner';
import resumeData from './resume.data.json';

interface SkillItem {
  name: string;
  level: 'Proficient' | 'Intermediate' | 'Learning' | string;
}

interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

const groupIcons: Record<string, React.ReactNode> = {
  'Core Linguistics': <Psychology color="info" sx={{ mr: 1 }} />,
  'Programming & Tools': <Code color="info" sx={{ mr: 1 }} />,
  'NLP Libraries': <SmartToy color="info" sx={{ mr: 1 }} />,
  'ML & Data Foundations': <Analytics color="info" sx={{ mr: 1 }} />,
  'Applied Language Technology': <RecordVoiceOver color="info" sx={{ mr: 1 }} />,
  Professional: <Group color="info" sx={{ mr: 1 }} />,
};

function levelProps(level: string): { color: 'primary' | 'info' | 'default'; variant: 'filled' | 'outlined' } {
  if (level === 'Proficient') return { color: 'primary', variant: 'filled' };
  if (level === 'Intermediate') return { color: 'info', variant: 'outlined' };
  return { color: 'default', variant: 'outlined' };
}

const Resume: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: { xs: 0, md: 4 }, p: { xs: 0, md: 2 } }}>
      <KuromiBanner />
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderTop: '6px solid #ab47bc' }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 120, md: 210 },
              background: 'linear-gradient(100deg, #4a148c 0%, #7b1fa2 30%, #ab47bc 55%, #ec407a 80%, #ff8fb3 100%)',
              mb: { xs: 3, md: 4 },
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 18px rgba(123,31,162,0.35)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: 0.5,
                backgroundImage:
                  'radial-gradient(circle at 15% 25%, rgba(255,255,255,0.9) 0 2px, transparent 3px), radial-gradient(circle at 30% 70%, rgba(255,227,241,0.9) 0 2.5px, transparent 3.5px), radial-gradient(circle at 50% 30%, rgba(255,255,255,0.9) 0 2px, transparent 3px), radial-gradient(circle at 68% 65%, rgba(255,227,241,0.9) 0 2.5px, transparent 3.5px), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.9) 0 2px, transparent 3px)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 14,
                fontSize: { xs: 22, md: 30 },
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              }}
            >
              💜🎀✨
            </Box>
            <Avatar
              sx={{
                width: 96,
                height: 96,
                mb: -4,
                bgcolor: '#ab47bc',
                fontSize: '2.5rem',
                border: '3px solid white',
                boxShadow: '0 0 0 4px #f3a8d2, 0 6px 16px rgba(171,71,188,0.55)',
                zIndex: 1,
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
          Computational Linguistics Skills
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Researched from current Computational Linguist job requirements — grouped so recruiters can scan in seconds.
        </Typography>
        <Stack spacing={2} sx={{ mb: 3 }}>
          {((resumeData as unknown as { skillGroups: SkillGroup[] }).skillGroups ?? []).map((group) => (
            <Box key={group.title}>
              <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                {groupIcons[group.title] ?? <CheckCircle color="info" sx={{ mr: 1 }} />}
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {group.title}
                </Typography>
              </Box>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {group.skills.map((skill) => {
                  const { color, variant } = levelProps(skill.level);
                  return (
                    <Chip
                      key={skill.name}
                      label={`${skill.name} · ${skill.level}`}
                      color={color}
                      variant={variant}
                      title={`${skill.name} — ${skill.level}`}
                    />
                  );
                })}
              </Box>
            </Box>
          ))}
        </Stack>
        <Typography variant="subtitle2" gutterBottom sx={{ color: '#1976d2' }}>
          All skills (ATS keywords)
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
          background: 'linear-gradient(to bottom,#7b1fa2,#ec407a)',
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
