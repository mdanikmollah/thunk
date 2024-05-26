import React from 'react'
import TagsContainer from '../components/tags/TagsContainer'
import Pagination from '../components/pagination/Pagination'
import VideosContainer from '../components/videos/VideosContainer'
const Home = () => {
  return (
    <>
    <TagsContainer/>
    <VideosContainer/>
    <Pagination/>
    
    </>
  )
}

export default Home