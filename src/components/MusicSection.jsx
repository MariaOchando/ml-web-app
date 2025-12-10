import { ArrowForward, PlayArrow, Topic } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Container, Icon, IconButton, Typography } from '@mui/material'
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
        <Box sx={{ display: 'flex', marginTop: '30px' }}>
          <Card sx={{ display: 'flex', width: '60%', backgroundColor: 'var(--icons-background-color)', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <CardContent sx={{ flex: '1 0 auto', }}>
                <Typography component="div" variant="h5" color='white' sx={{ fontWeight: 'bold' }}>
                  Showreel
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  color='white'
                  sx={{ fontWeight: 'bold' }}>
                  Matthew Laming
                </Typography>
                <Typography color='white' sx={{ paddingTop: '20px' }}>His musical works and scores often feature a strong
                  emphasis on sound design and a complex layering of recorded textures to create deep and dramatic soundscapes.</Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="iframe"
              src="https://www.youtube.com/embed/p1dvE3y7OkA"
              sx={{ height: '300px', borderRadius: '0 8px 8px 0', width: '60%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Card sx={{ display: 'flex', width: '400px', height: '180px', backgroundColor: 'transparent', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--icons-background-color)' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5" color='white'>
                  Climbing The Mountain
                </Typography>
                <Typography
                  color='white'
                  variant="subtitle1"
                  component="div"
                >
                  The Droving
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="play/pause">
                  <PlayArrow sx={{ height: 38, width: 38, color: 'white' }} />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image='src/assets/theDroving.png'
              alt='The Droving poster'
            />

          </Card>
          <Card sx={{ display: 'flex', width: '400px', height: '180px', backgroundColor: 'transparent', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--icons-background-color)' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5" color='white'>
                  It's Not Cold Yet
                </Typography>
                <Typography
                  color='white'
                  variant="subtitle1"
                  component="div"
                >
                  Sideworld - Haunted Forests of England
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="play/pause">
                  <PlayArrow sx={{ height: 38, width: 38, color: 'white' }} />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image='src/assets/SideworldForests.png'
              alt='The Droving poster'
            />
          </Card>
          <Card sx={{ display: 'flex', width: '400px', height: '180px', backgroundColor: 'transparent', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--icons-background-color)' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5" color='white'>
                  Hope
                </Typography>
                <Typography
                  color='white'
                  variant="subtitle1"
                  component="div"
                >
                  Sideworld - Damnation Village
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="play/pause">
                  <PlayArrow sx={{ height: 38, width: 38, color: 'white' }} />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image='src/assets/theDroving.png'
              alt='The Droving poster'
            />
          </Card>
        </Box>
        <Button sx={{ marginTop: '40px', color: 'white', backgroundColor: 'var(--background-light-color)', padding: '10px' }} >
          <Typography fontWeight='bold' textTransform='none'>See All Music</Typography>
          <ArrowForward sx={{ marginLeft: '20px' }} />
        </Button>
        {/* <Button sx={{ marginTop: '40px' }}>See All Music
          <Ico
        </Button> */}
      </Box>

    </Container>
  )
}

export default MusicSection