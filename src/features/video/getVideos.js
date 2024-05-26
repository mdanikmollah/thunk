import { api } from "../../api/api"

export const getVideos = async (id)=>{
    const { data } = await api.get(`/videos/${id}`) 
    return data
}