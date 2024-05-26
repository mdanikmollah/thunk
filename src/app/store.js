import { configureStore } from '@reduxjs/toolkit'
import videoSlice from '../features/videos/videoSlice'
import tagSlice from '../features/tags/tagSlice'
import videosSlice from '../features/video/videosSlice'



export const store = configureStore({
  reducer: {
    videos:videoSlice,
    tags:tagSlice,
    video:videosSlice
  
  },
})