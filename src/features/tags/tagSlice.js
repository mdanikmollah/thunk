import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./getTags";

const initialState = {
    loading:false,
    isError:false,
    error:"",
    data:[]
}

export const fetchTags = createAsyncThunk("tags/fetchTags",async()=>{
    const res = await getTags()
    return res
})

export const tagSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTags.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchTags.fulfilled,(state,action)=>{
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchTags.rejected,(state,action)=>{
            state.loading = false,
            state.data = [],
            state.isError = true,
            state.error = action.error.message
        })
    }
})

export default tagSlice.reducer