import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const MusicSection = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100%',
        backgroundColor: 'var(--background-dark-color)',
        height: '100%',
        display: 'flex',
        padding: '100px',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: '#7072FF', fontWeight: 'bold' }}>MUSIC</Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'white', marginTop: '20px' }}>Where words fail, music speaks</Typography>
        <Typography sx={{ color: 'white', marginTop: '20px' }}>His musical works and scores often feature a strong
          emphasis on sound design and a complex layering of recorded textures to create deep and dramatic soundscapes.</Typography>
        <Box sx={{ marginTop: '30px', display: 'flex', gap: 20 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <Box
              component='img'
              src='src/assets/theDroving.png'
              alt='The Droving poster'
              sx={{
                width: 200,
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
            <Typography sx={{ color: 'white' }}>The Droving</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <Box
              component='img'
              src='src/assets/SideworldForests.png'
              alt='The Droving poster'
              sx={{
                width: 200,
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
            <Typography align='center' sx={{ color: 'white' }}>Sideworld: Haunted Forests of England</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <Box
              component='img'
              src='src/assets/theDroving.png'
              alt='The Droving poster'
              sx={{
                width: 200,
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
            <Typography sx={{ color: 'white' }}>The Droving</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            <Box
              component='img'
              src='src/assets/theDroving.png'
              alt='The Droving poster'
              sx={{
                width: 200,
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
            <Typography sx={{ color: 'white' }}>The Droving</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default MusicSection