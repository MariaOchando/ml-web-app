import { Box, Container } from '@mui/material';
import AutoSlider from '../components/Slider';

const Home = () => {

  return (
    <Box>
      <Container style={{ background: 'var(--gradient-bg)', padding: '50px' }} maxWidth={'100%'} >
        {/* <Box height='500px' sx={{ p: 0 }} > */}
        <AutoSlider />
        {/* </Box> */}
      </Container >
      <Container>

      </Container>
    </Box>

  )
}

export default Home