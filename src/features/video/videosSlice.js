import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./getVideos";

const initialState = {
    loading:false,
    isError:false,
    error:"",
    data:{}
}

export const fetchVideos = createAsyncThunk("videos/fetchVideos",async(id)=>{
    const res = await getVideos(id)
    return res
})

export const videosSlice = createSlice({
    name: "video",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideos.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchVideos.rejected,(state,action)=>{
            state.loading = false,
            state.data = [],
            state.isError = true,
            state.error = action.error.message
        })
    }
})

export default videosSlice.reducer