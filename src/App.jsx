import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Music from './Pages/Music'
import Mymla from './Pages/Mymla'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/mymla' element={<Mymla />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
