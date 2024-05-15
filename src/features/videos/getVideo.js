import { api } from "../../api/api"

export const getVideo = async ()=>{
    const {data} = await api.get("/videos")
    return data
}