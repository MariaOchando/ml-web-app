import { CallSplit, MenuBook, ThumbUp } from '@mui/icons-material'
import { Box, Container, Divider, Icon, Typography } from '@mui/material'
import React from 'react'

const AboutSection = () => {
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
      <Box sx={{ width: '50%', position: 'relative' }}>
        <Typography variant="h6" sx={{ color: '#7072FF', fontWeight: 'bold' }}>ABOUT</Typography>
        <Typography sx={{ color: 'white' }}>Matthew Laming is an English Music Producer and Composer based in Galway,
          Ireland. He has spent many years composing and producing numerous musical works and albums under various
          pseudonyms and styles.</Typography>
        <Box sx={{ marginTop: '50px' }}>
          <Box sx={{ display: 'flex', alignItems: 'top', gap: 2, marginTop: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Box className='about-icons'>
                <MenuBook sx={{ color: 'white', height: '40px', width: '40px', }} />
              </Box>
              <Divider orientation='vertical' sx={{ backgroundColor: 'var(--background-light-color)', height: '50px', width: '2px' }} />
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Certified</Typography>
              <Typography sx={{ color: 'white' }}>Masters in Music Composition from Trinity College Dublin.</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'top', gap: 2, marginTop: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Box className='about-icons'>
                <ThumbUp sx={{ color: 'white', height: '40px', width: '40px', }} />
              </Box>
              <Divider orientation='vertical' sx={{ backgroundColor: 'var(--background-light-color)', height: '120px', width: '2px' }} />
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Experienced</Typography>
              <Typography sx={{ color: 'white' }}>In 2018 he turned his musical talents to film scoring and he has
                since scored many short and feature films including the acclaimed feature film The Droving (2020).
                He recently worked on a music score for a series of feature length horror documentaries.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'top', gap: 2, marginTop: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Box className='about-icons'>
                <CallSplit sx={{ color: 'white', height: '40px', width: '40px', }} />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Versatile</Typography>
              <Typography sx={{ color: 'white' }}>He specializes in a unique blend of atmospheric and ambient sound,
                overlayed with haunting melodies imbrued with emotion. Not limited to ambience you will hear his music encompasses a wide range of styles and genres.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '50%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex' }}>
          <Box className='img-box' sx={{ zIndex: 3 }}>
            <Box
              component="img"
              src="src/assets/pianoColor.jpg"
              alt="Matthew playing piano"
              sx={{
                width: { xs: 200, md: 300 },
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          </Box>
          <Box className='img-box' sx={{ zIndex: 3, marginLeft: '50px', marginTop: '40px' }}>
            <Box
              component="img"
              src="src/assets/MattWithClarinete.png"
              alt="Matthew with a clarinet"
              sx={{
                width: { xs: 200, md: 300 },
                height: 'auto',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          </Box>
        </Box>
        <Box className='img-box' sx={{ zIndex: 2, marginLeft: '80px', marginTop: '40px' }} >
          <Box
            component="img"
            src="src/assets/D.jpg"
            alt="Matthew talking to an audience"
            sx={{
              width: { xs: 400, md: 600 },
              height: 'auto',
              borderRadius: '6px',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default AboutSection