import React from 'react'
import Navbar from './components/layout/Navbar'
import TagsContainer from './components/tags/TagsContainer'
import VideosContainer from './components/VideosContainer'
import Pagination from './components/pagination/Pagination'
import Footer from './components/layout/Footer'



function App() {
  

  return (
    <>
    <Navbar/>
    <TagsContainer/>
    <VideosContainer/>
    <Pagination/>
    <Footer/>
    </>
  )
}

export default App
