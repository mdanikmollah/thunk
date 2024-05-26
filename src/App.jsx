import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/layout/RootLayout'
import Details from './pages/Details'



function App() {

  return (
    <Routes>
      <Route element={<RootLayout/>}>
       <Route path= "/" element = {<Home/>} />
       <Route path= "/:id" element = {<Details/>} />
      </Route>     
    </Routes>
  )
}

export default App
