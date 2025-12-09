import { Box, Container } from '@mui/material'
import React from 'react'

const LinksSection = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100%',
        backgroundColor: 'var(--background-light-color)',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <a href='https://www.imdb.com/es-es/name/nm9769986/' target='_blank' rel='noopener noreferrer'>
        <Box
          component="img"
          src="src/assets/imdb.png"
          alt="IMDB"
          sx={{ width: { xs: 40, sm: 60, md: 80 }, height: 'auto' }}
        />
      </a>
      <a href='https://www.mandy.com/u/matthew-laming/' target='_blank' rel='noopener noreferrer'>
        <Box
          component="img"
          src="src/assets/mandy.png"
          alt="Mandy"
          sx={{ width: { xs: 40, sm: 60, md: 80 }, height: 'auto' }}
        />
      </a>
      <a href='https://screencomposersguild.ie/matthew-laming' target='_blank' rel='noopener noreferrer'>
        <Box
          component="img"
          src="src/assets/scgi.png"
          alt="SCGI"
          sx={{ width: { xs: 40, sm: 60, md: 80 }, height: 'auto' }}
        />
      </a>
      <a href='https://soundcloud.com/matthewlamingcomposer' target='_blank' rel='noopener noreferrer'>
        <Box
          component="img"
          src="src/assets/soundcloud.png"
          alt="SCGI"
          sx={{ width: { xs: 40, sm: 60, md: 80 }, height: 'auto' }}
        />
      </a>
    </Container>
  )
}

export default LinksSection