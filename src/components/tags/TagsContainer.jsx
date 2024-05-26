import React, { useEffect } from 'react';
import Tags from './Tags';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagSlice';

const TagsContainer = () => {
  const {loading,isError,error,data} = useSelector(state=>state.tags)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTags())
  },[dispatch])

  let content
  if (loading) {
    content = "loading....."
  }
  else if (isError) {
    content = `error ${error}`
  }
  else if (!loading && !isError && data.length > 0) {
    content = data.map(({id,title})=><Tags tag = {title} key = {id}/>)
  }
  return (
   <>
    <section>
    <div className="flex gap-2 px-5 py-6 mx-auto overflow-y-auto border-b max-w-7xl lg:px-0">
        {content}
        {/* selected */}
        {/* <div className="px-4 py-1 text-white bg-blue-600 rounded-full cursor-pointer">
          redux
        </div> */}
    </div>
    </section>
   </>
  )
}

export default TagsContainer