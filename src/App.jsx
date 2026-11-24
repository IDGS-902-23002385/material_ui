import React from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  CssBaseline,
} from '@mui/material'

const data = {
  row1: [
    {
      id: 1,
      desc: 'Soy espiritualmente negro.',
    },
  ],
  row2: [
    {
      id: 2,
      desc: 'Soy flojo.',
    },
    {
      id: 3,
      desc: 'Prefiero irme dormir muy tarde.',
    },
  ],
  row3: [
    {
      id: 4,
      desc: 'Sobrepienso mucho.',
    },
    {
      id: 5,
      desc: 'Me cuesta empezar una tarea.',
    },
    {
      id: 6,
      desc: 'Soy creativo.',
    },
  ],
  row4: [
    {
      id: 7,
      desc: 'Soy muy vicioso.',
    },
    {
      id: 8,
      desc: 'Prefiero las soluciones poco practicas.',
    },
    {
      id: 9,
      desc: 'Me gustan las morras con TLP (tragico).',
    },
    {
      id: 10,
      desc: 'Ya les dije que soy vicioso',
    },
  ],
}

function SectionCard({ title, desc }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 1,
        borderColor: 'grey.300',
        backgroundColor: '#fff',
      }}
    >
      <Box>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </Paper>
  )
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>

        <Divider sx={{ mb: 3 }} />
        <Typography variant="overline" color="text.secondary" fontWeight={700}>
        </Typography>
        <Grid container spacing={2} columns={12} sx={{ mb: 3, mt: 0.5 }}>
          {data.row1.map((item) => (
            <Grid key={item.id} size={12}>
              <SectionCard title={item.id} desc={item.desc} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="overline" color="text.secondary" fontWeight={700}>
        </Typography>
        <Grid container spacing={2} columns={12} sx={{ mb: 3, mt: 0.5 }}>
          {data.row2.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <SectionCard title={item.id} desc={item.desc} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="overline" color="text.secondary" fontWeight={700}>
        </Typography>
        <Grid container spacing={2} columns={12} sx={{ mb: 3, mt: 0.5 }}>
          {data.row3.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <SectionCard title={item.id} desc={item.desc} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="overline" color="text.secondary" fontWeight={700}>
        </Typography>
        <Grid container spacing={2} columns={12} sx={{ mb: 3, mt: 0.5 }}>
          {data.row4.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <SectionCard title={item.id} desc={item.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
