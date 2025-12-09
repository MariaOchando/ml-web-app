import { Box, Container, Divider } from '@mui/material';
import AutoSlider from '../components/Slider';
import LinksSection from '../components/LinksSection';
import AboutSection from '../components/AboutSection';
import MusicSection from '../components/MusicSection';

const Home = () => {

  return (
    <Box backgroundColor='var(--background-dark-color)' sx={{ height: '100%', width: '100%' }}>
      <Container style={{ background: 'var(--gradient-bg)', padding: '50px' }} maxWidth={'100%'} >
        {/* <Box height='500px' sx={{ p: 0 }} > */}
        <AutoSlider />
        {/* </Box> */}
      </Container >
      <LinksSection />
      <AboutSection />
      <Divider sx={{ backgroundColor: 'var(--icons-background-color)', marginLeft: '100px', marginRight: '100px', height: '2px', width: 'auto' }} />
      <MusicSection />
    </Box>

  )
}

export default Home