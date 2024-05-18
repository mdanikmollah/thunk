import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleVideo from './SingleVideo'
import { fetchVideos } from '../../features/videos/videoSlice'

const VideosContainer = () => {
  const {loading,isError,error,data} = useSelector(state=>state.videos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchVideos())
  },[dispatch])

  let content
  if (loading) {
    content = "loading....."
  }
  else if (isError) {
    content = `error ${error}`
  }
  else if (!loading && !isError && data.length > 0) {
    content = data.map((video)=><SingleVideo video = {video} key = {video.id}/>)
  }
  return (
    <section className="pt-12">
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* single video */}
            {content}
        {/* error section
              <div class="col-span-12">some error happened</div> */}
      </div>
    </section>
  </section>
  )
}

export default VideosContainer