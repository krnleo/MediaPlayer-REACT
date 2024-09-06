import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//upload a video
export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get all videos
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//view single video
export const getVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//Remove video
export const removeVideoAPI = async(id)=> {
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}    

//insert video to history
export const addVideoToHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//get video from history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//Remove history
export const removeHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//addcategory
export const addCategoryAPI = async(category) => {
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//getallcategory
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//remove category
export const removeCategoryAPI = async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`,{})
}

// updateCategory
export const updateCategoryAPI = async (id, categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`, categoryDetails);

}

//view single video

export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")

}


