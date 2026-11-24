import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack,
  Avatar,
  LinearProgress,
  Tooltip,
} from '@mui/material'
import {
  PrecisionManufacturing,
  Hotel,
  NightsStay,
  Psychology,
  HourglassBottom,
  Lightbulb,
  Flag,
  BatteryChargingFull,
  Timer,
  EmojiEvents,
  LocalFireDepartment,
  Snooze,
  ViewColumn,
} from '@mui/icons-material'

const ICON_MAP = {
  PrecisionManufacturing: <PrecisionManufacturing fontSize="medium" />,
  Hotel: <Hotel fontSize="medium" />,
  NightsStay: <NightsStay fontSize="medium" />,
  Psychology: <Psychology fontSize="medium" />,
  HourglassBottom: <HourglassBottom fontSize="medium" />,
  Lightbulb: <Lightbulb fontSize="medium" />,
  Flag: <Flag fontSize="medium" />,
  BatteryChargingFull: <BatteryChargingFull fontSize="medium" />,
  Timer: <Timer fontSize="medium" />,
  EmojiEvents: <EmojiEvents fontSize="medium" />,
}

export default function AttributeCard({ item, isHero = false }) {
  const icon = ICON_MAP[item.iconName] || <EmojiEvents />

  return (
    <Card
      elevation={isHero ? 5 : 2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        background: (theme) =>
          isHero
            ? theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)'
              : 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)'
            : theme.palette.mode === 'dark'
            ? 'rgba(30, 41, 59, 0.7)'
            : '#ffffff',
        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'dark'
              ? '0 12px 28px rgba(0, 0, 0, 0.5)'
              : '0 12px 28px rgba(99, 102, 241, 0.18)',
        },
      }}
    >
      <CardContent
        sx={{
          p: isHero ? 3.5 : 2.5,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        {/* Encabezado con Icono, Título y Badges de Grid */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              sx={{
                bgcolor: `${item.colorTheme}.main`,
                color: '#fff',
                width: isHero ? 48 : 40,
                height: isHero ? 48 : 40,
                boxShadow: 2,
              }}
            >
              {icon}
            </Avatar>
            <Box>
              <Typography
                variant={isHero ? 'h5' : item.cols === 3 ? 'subtitle1' : 'h6'}
                component="h3"
                fontWeight={700}
                lineHeight={1.2}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
                sx={{ display: 'block', mt: 0.3 }}
              >
                {item.tagline}
              </Typography>
            </Box>
          </Stack>

          <Tooltip title={`Ocupa ${item.cols} de 12 columnas en el Grid de MUI`}>
            <Chip
              icon={<ViewColumn fontSize="small" />}
              label={`${item.cols}/12 cols`}
              size="small"
              color={item.colorTheme}
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '0.72rem' }}
            />
          </Tooltip>
        </Box>

        {/* Cita textual / Humor característico */}
        <Box
          sx={{
            py: 1,
            px: 1.5,
            borderRadius: 2,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.7)',
            borderLeft: 3,
            borderColor: `${item.colorTheme}.main`,
            fontStyle: 'italic',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={item.cols === 3 ? '0.78rem' : '0.85rem'}
          >
            {item.quote}
          </Typography>
        </Box>

        {/* Descripción profunda */}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            flexGrow: 1,
            fontSize: item.cols === 3 ? '0.8rem' : '0.875rem',
            lineHeight: 1.5,
          }}
        >
          {item.description}
        </Typography>

        {/* Barras de estadísticas: Perseverancia vs Flojera */}
        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.4 }}>
              <Typography
                variant="caption"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
              >
                <LocalFireDepartment sx={{ fontSize: 14, color: 'error.main' }} />
                Perseverancia
              </Typography>
              <Typography variant="caption" fontWeight={700} color="primary">
                {item.perseverance}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.perseverance}
              color="primary"
              sx={{ height: 6, borderRadius: 3 }}
            />
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.4 }}>
              <Typography
                variant="caption"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}
              >
                <Snooze sx={{ fontSize: 14, color: 'warning.main' }} />
                Flojera / Ahorro
              </Typography>
              <Typography variant="caption" fontWeight={700} color="warning.main">
                {item.laziness}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.laziness}
              color="warning"
              sx={{ height: 6, borderRadius: 3 }}
            />
          </Box>
        </Box>

        {/* Etiquetas / Tags */}
        <Stack direction="row" spacing={0.6} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
          {item.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.68rem',
                height: 22,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
