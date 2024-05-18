import { configureStore } from '@reduxjs/toolkit'
import videoSlice from '../features/videos/videoSlice'
import tagSlice from '../features/tags/tagSlice'



export const store = configureStore({
  reducer: {
    videos:videoSlice,
    tags:tagSlice
  
  },
})