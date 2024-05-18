import React from 'react'
import Navbar from './components/layout/Navbar'
import TagsContainer from './components/tags/TagsContainer'
import Pagination from './components/pagination/Pagination'
import Footer from './components/layout/Footer'
import VideosContainer from './components/videos/VideosContainer'



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
