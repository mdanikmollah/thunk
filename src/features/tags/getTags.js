import { api } from "../../api/api"

export const getTags = async ()=>{
    const {data} = await api.get("/tags")
    return data
}