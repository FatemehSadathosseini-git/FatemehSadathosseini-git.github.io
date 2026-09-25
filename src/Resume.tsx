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
  'Core Linguistics': <Psychology sx={{ mr: 1, color: '#8e24aa' }} />,
  'Programming & Tools': <Code sx={{ mr: 1, color: '#8e24aa' }} />,
  'NLP Libraries': <SmartToy sx={{ mr: 1, color: '#8e24aa' }} />,
  'ML & Data Foundations': <Analytics sx={{ mr: 1, color: '#8e24aa' }} />,
  'Applied Language Technology': <RecordVoiceOver sx={{ mr: 1, color: '#8e24aa' }} />,
  Professional: <Group sx={{ mr: 1, color: '#8e24aa' }} />,
};

function levelProps(level: string): { color: 'secondary' | 'info' | 'default'; variant: 'filled' | 'outlined' } {
  if (level === 'Proficient') return { color: 'secondary', variant: 'filled' };
  if (level === 'Intermediate') return { color: 'info', variant: 'outlined' };
  return { color: 'default', variant: 'outlined' };
}

const Resume: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: { xs: 0, md: 4 }, p: { xs: 0, md: 2 } }}>
      <KuromiBanner />
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderTop: '6px solid #ab47bc' }}>
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mb={3}>
          {/* Slim linguistics banner — avatar sits BELOW it so it never covers the face */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 84, md: 110 },
              background: 'linear-gradient(100deg, #2a0a4a 0%, #4a148c 35%, #6a1b9a 65%, #8e24aa 100%)',
              mb: { xs: 6, md: 7 },
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 18px rgba(74,20,140,0.4)',
            }}
          >
            {/* faint IPA / syntax motif — left aligned, low opacity so it never fights the photo */}
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                top: 8,
                left: 14,
                fontSize: { xs: 15, md: 19 },
                letterSpacing: 3,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: '"Segoe UI", "Noto Sans", sans-serif',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              ə ʃ θ ŋ · [NP [N′]] · λx
            </Typography>
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                bottom: 8,
                left: 16,
                fontSize: { xs: 12, md: 14 },
                letterSpacing: 2,
                color: 'rgba(243,168,210,0.55)',
                fontFamily: '"Segoe UI", monospace',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {'{ tokenize → parse → meaning }'}
            </Typography>
            {/* sparkle dots */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: 0.4,
                backgroundImage:
                  'radial-gradient(circle at 88% 25%, rgba(255,255,255,0.9) 0 2px, transparent 3px), radial-gradient(circle at 72% 70%, rgba(255,227,241,0.85) 0 2.5px, transparent 3.5px), radial-gradient(circle at 55% 30%, rgba(255,255,255,0.8) 0 2px, transparent 3px)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 14,
                fontSize: { xs: 18, md: 24 },
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              }}
            >
              💜🎀✨
            </Box>
          </Box>
          {/* Avatar BELOW the banner: full face visible, object-position tuned to your photo */}
          <Avatar
            sx={{
              width: { xs: 132, md: 160 },
              height: { xs: 132, md: 160 },
              mt: { xs: -11, md: -13 },
              bgcolor: '#8e24aa',
              border: '4px solid white',
              boxShadow: '0 0 0 4px #f3a8d2, 0 8px 22px rgba(142,36,170,0.5)',
            }}
            slotProps={{
              img: {
                style: { objectFit: 'cover', objectPosition: '50% 18%' },
              },
            }}
          >
            <img src="avatar.jpeg" alt="Profile photo of Fatemeh Sadat Hosseini" />
          </Avatar>
          <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
            {resumeData.name}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1} flexWrap="wrap">
            <LocationOn sx={{ color: '#8e24aa' }} fontSize='small' />
            <Typography variant="body2">{resumeData.contact.location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1} flexWrap="wrap">
            <Email sx={{ color: '#8e24aa' }} fontSize='small' />
            <Typography variant="body2" component={Link} href={`mailto:${resumeData.contact.email}`} color="inherit" underline="hover">
              {resumeData.contact.email}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1} flexWrap="wrap">
            <LinkedIn sx={{ color: '#8e24aa' }} fontSize='small' />
            <Typography variant="body2" component={Link} href={resumeData.contact.linkedin} color="inherit" underline="hover">
              {resumeData.contact.linkedin}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Summary
        </Typography>
        <Typography variant="body1" paragraph>
          {resumeData.summary}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Education
        </Typography>
        <List>
          {resumeData.education.map((edu, index) => (
            <ListItem key={index} alignItems="flex-start">
              <School sx={{ mr: 2, mt: 1, color: '#8e24aa' }} />
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

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Experience
        </Typography>
        <Stack spacing={2}>
          {resumeData.experience.map((exp, index) => (
            <Card key={index} elevation={2} variant='outlined' sx={{ display: 'flex' }}>
              <Work sx={{ ml: 1, mt: 2.4, color: '#8e24aa' }} />
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

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Certifications
        </Typography>
        <List>
          {resumeData.certifications.map((cert, index) => (
            <ListItem key={index} alignItems="flex-start">
              <CheckCircle sx={{ mr: 2, mt: 1, color: '#8e24aa' }} />
              <ListItemText
                primary={cert.name}
                secondary={cert.issuer}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Languages
        </Typography>
        <List>
          {resumeData.languages.map((lang, index) => (
            <ListItem key={index} alignItems="flex-start">
              <Language sx={{ mr: 2, mt: 1, color: '#8e24aa' }} />
              <ListItemText
                primary={lang.language}
                secondary={`Proficiency: ${lang.proficiency}`}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom sx={{ color: '#8e24aa' }}>
          Computational Linguistics Skills
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Researched from current Computational Linguist job requirements — grouped so recruiters can scan in seconds.
        </Typography>
        <Stack spacing={2} sx={{ mb: 3 }}>
          {((resumeData as unknown as { skillGroups: SkillGroup[] }).skillGroups ?? []).map((group) => (
            <Box key={group.title}>
              <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                {groupIcons[group.title] ?? <CheckCircle sx={{ mr: 1, color: '#8e24aa' }} />}
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
        <Typography variant="subtitle2" gutterBottom sx={{ color: '#8e24aa' }}>
          All skills (ATS keywords)
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {resumeData.skills.map((skill, index) => (
            <Chip key={index} label={skill} color="secondary" variant="outlined" />
          ))}
        </Box>
      </Paper>
      <Paper
        sx={{
          textAlign: 'center',
          mt: { xs: 2, md: 4 },
          py: { xs: 2, md: 3 },
          height: { xs: 100, md: 150 },
          background: 'linear-gradient(to bottom,#4a148c,#8e24aa)',
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
