import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videoSlice';

const Pagination = () => {
  const {data} = useSelector(state => state.videos)
  const pages = new Array(data.pages).fill(1)
  const dispatch = useDispatch()
  return (
    <section className="pt-12">
    <div className="flex justify-end gap-2 px-5 py-6 mx-auto max-w-7xl lg:px-0">
      {
        pages.map((value,index)=>(

          <div key={index} className={`px-4 py-1 text-blue-600 bg-blue-100 rounded-full ${data.pageNum === value + index && "text-white bg-blue-600"}`} onClick={()=> dispatch(fetchVideos(value + index))}>{value + index}</div>

        ))

      }
     
    </div>
  </section>
  )
}

export default Pagination;