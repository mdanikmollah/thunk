import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./getVideo";

const initialState = {
    loading:false,
    isError:false,
    error:"",
    data:[]
}

export const fetchVideo = createAsyncThunk("video/fetchVideo",async()=>{
    const res = await getVideo()
    return res
})

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideo.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.loading = false,
            state.data = [],
            state.isError = true,
            state.error = action.error.message
        })
    }
})

export default videoSlice.reducer