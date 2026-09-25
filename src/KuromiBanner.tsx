import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

// Original cute bunny-imp mascot, hand-drawn SVG (Kuromi-inspired but
// NOT Sanrio artwork — no copyrighted assets are used or bundled).
// Floats, blinks, winks and waves using framer-motion.

function MascotSVG() {
  return (
    <svg width="96" height="96" viewBox="0 0 120 120" role="img" aria-label="Cute bunny mascot">
      <ellipse cx="28" cy="38" rx="13" ry="28" fill="#3d2b56" stroke="#221633" strokeWidth="3" />
      <ellipse cx="28" cy="40" rx="5.5" ry="16" fill="#f8a9d4" />
      <ellipse cx="92" cy="38" rx="13" ry="28" fill="#3d2b56" stroke="#221633" strokeWidth="3" />
      <ellipse cx="92" cy="40" rx="5.5" ry="16" fill="#f8a9d4" />
      <ellipse cx="60" cy="72" rx="34" ry="32" fill="#4a3573" stroke="#221633" strokeWidth="3" />
      <ellipse cx="60" cy="76" rx="24" ry="22" fill="#fff5fa" stroke="#221633" strokeWidth="2.5" />
      <circle cx="51" cy="74" r="3.4" fill="#221633" />
      <path d="M 63 74 q 5 -4 10 0" stroke="#221633" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="81" rx="4.5" ry="2.8" fill="#ffb3d9" opacity="0.9" />
      <ellipse cx="76" cy="81" rx="4.5" ry="2.8" fill="#ffb3d9" opacity="0.9" />
      <path d="M 55 82 q 5 5 10 0" stroke="#221633" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <g transform="translate(18,14) rotate(-18)">
        <ellipse cx="-8" cy="0" rx="9" ry="7" fill="#ff6fae" stroke="#c2185b" strokeWidth="2.5" />
        <ellipse cx="8" cy="0" rx="9" ry="7" fill="#ff6fae" stroke="#c2185b" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="5" fill="#ffd1e8" stroke="#c2185b" strokeWidth="2.5" />
      </g>
      <g transform="translate(60,52)">
        <ellipse cx="0" cy="0" rx="7" ry="6" fill="#ffd1e8" stroke="#221633" strokeWidth="2" />
        <rect x="-5" y="3" width="10" height="5" rx="2" fill="#ffd1e8" stroke="#221633" strokeWidth="2" />
        <circle cx="-2.8" cy="-0.5" r="1.6" fill="#221633" />
        <circle cx="2.8" cy="-0.5" r="1.6" fill="#221633" />
      </g>
      <circle cx="92" cy="76" r="4.5" fill="#ffd1e8" stroke="#221633" strokeWidth="2" />
    </svg>
  );
}

function FloatingHeart({ delay, x, size, emoji }: { delay: number; x: string; size: number; emoji: string }) {
  return (
    <motion.span
      style={{ position: 'absolute', left: x, bottom: 6, fontSize: size, pointerEvents: 'none' }}
      initial={{ y: 0, opacity: 0, scale: 0.6 }}
      animate={{ y: -70, opacity: [0, 1, 0], scale: [0.6, 1.1, 0.9] }}
      transition={{ duration: 3.4, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      {emoji}
    </motion.span>
  );
}

export default function KuromiBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        width: '100%', borderRadius: 12, marginBottom: 16, padding: '10px 16px',
        background: 'linear-gradient(100deg, #7b1fa2 0%, #ab47bc 35%, #ec407a 70%, #ff8fb3 100%)',
        color: 'white', overflow: 'hidden', position: 'relative',
        boxShadow: '0 6px 20px rgba(171,71,188,0.45)',
      }}
    >
      <Box
        sx={{
          position: 'absolute', inset: 0, opacity: 0.35,
          backgroundImage:
            'radial-gradient(circle at 12% 30%, #fff 0 2px, transparent 3px), radial-gradient(circle at 32% 70%, #ffe3f1 0 2.5px, transparent 3.5px), radial-gradient(circle at 55% 25%, #fff 0 2px, transparent 3px), radial-gradient(circle at 74% 65%, #ffe3f1 0 2.5px, transparent 3.5px), radial-gradient(circle at 90% 30%, #fff 0 2px, transparent 3px)',
        }}
      />
      <FloatingHeart delay={0} x="12%" size={18} emoji="💜" />
      <FloatingHeart delay={1.1} x="30%" size={16} emoji="💗" />
      <FloatingHeart delay={2} x="68%" size={16} emoji="✨" />
      <FloatingHeart delay={0.6} x="84%" size={18} emoji="💜" />
      <Box display="flex" alignItems="center" gap={2} sx={{ position: 'relative' }}>
        <motion.div
          animate={{ y: [0, -9, 0], rotate: [0, -3, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))' }}
        >
          <MascotSVG />
        </motion.div>
        <Box sx={{ minWidth: 0 }}>
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.4, lineHeight: 1.2 }}>
              Hi! Thanks for visiting my CV
            </Typography>
          </motion.div>
          <Typography variant="body2" sx={{ opacity: 0.95 }}>
            MSc Linguistics @ Potsdam · dreaming in syntax, coding in Python
          </Typography>
        </Box>
        <motion.span
          style={{ marginLeft: 'auto', fontSize: 30 }}
          animate={{ rotate: [0, 15, -15, 0], y: [0, -6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          🎀
        </motion.span>
      </Box>
    </motion.div>
  );
}
