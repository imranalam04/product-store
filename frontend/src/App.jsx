import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CreatePage from './pages/createPage'

const App = () => {
  return (
    <div>
      <Box minH={"100vh"}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
      </Box>
    </div>
  )
}

export default App