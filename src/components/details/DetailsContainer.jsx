import React, { useEffect } from 'react'
import SingleVideoDetails from './SingleVideoDetails'
import RelatedVideo from './RelatedVideo'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchTags } from '../../features/tags/tagSlice'
import { fetchVideos } from '../../features/video/videosSlice'

const DetailsContainer = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {loading,isError,error,data} = useSelector(state=>state.videos)
  useEffect(()=>{
    dispatch(fetchVideos(id))
  },[dispatch,id])

  let content
  if (loading) {
    content = "loading....."
  }
  else if (isError) {
    content = `error ${error}`
  }
  else if (!loading && !isError && data) {
  }
  content = <SingleVideoDetails video = {data} key = {data.id}/>
  console.log(data);
  return (
    <section className="pt-6 pb-20">
    <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        {content}
        {/* related videos */}
        <RelatedVideo/>
      </div>
    </div>
  </section>
  )
}

export default DetailsContainer