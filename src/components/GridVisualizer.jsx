import React from 'react'
import { Box, Paper, Typography, Stack } from '@mui/material'

const LAYOUT_ROWS = [
  { label: 'Fila 1 (1)', counts: 1, cols: 12, color: '#6366f1' },
  { label: 'Fila 2 (2 2)', counts: 2, cols: 6, color: '#ec4899' },
  { label: 'Fila 3 (3 3 3)', counts: 3, cols: 4, color: '#10b981' },
  { label: 'Fila 4 (4 4 4 4)', counts: 4, cols: 3, color: '#f59e0b' },
]

export default function GridVisualizer() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2.5,
        mb: 4,
        borderRadius: 3,
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(248, 250, 252, 0.8)',
      }}
    >
      <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ letterSpacing: 0.5 }}>
        📐 ESQUEMA DEL GRID DE 12 COLUMNAS (1 - 2 2 - 3 3 3 - 4 4 4 4)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Cada fila suma exactamente <strong>12 columnas</strong> en el sistema de Grid de Material UI:
      </Typography>

      <Stack spacing={1.2}>
        {LAYOUT_ROWS.map((row) => (
          <Box key={row.label}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="caption" fontWeight={600}>
                {row.label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {row.counts} × {row.cols} cols = 12 cols
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${row.counts}, 1fr)`,
                gap: 1,
              }}
            >
              {Array.from({ length: row.counts }).map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    py: 0.8,
                    px: 1,
                    textAlign: 'center',
                    borderRadius: 1.5,
                    bgcolor: row.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Columna {index + 1} ({row.cols}/12)
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  )
}
