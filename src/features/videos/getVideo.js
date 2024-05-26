import { api } from "../../api/api"

export const getVideo = async (pageNum=1)=>{
    const { data } = await api.get(`/videos?_page=${pageNum}&_per_page=2`)
    return {...data,pageNum}
}