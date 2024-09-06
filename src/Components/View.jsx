import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VedioCard';
import { getAllCategoryAPI, getAllVideosAPI, updateCategoryAPI } from '../services/allAPI';
import Category from './Category';

function View({uploadVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos = async ()=>{
    const result = await getAllVideosAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }
    else{
      console.log("API Failed");
      setAllVideos([])
    }
  }

  const dargOver = (e)=>{
    e.preventDefault();
  }

  const videoDropped = async (e)=>{
    let  {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data} = await getAllCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!=videoId)
    console.log(result);
    let {id,CategoryName} = selectedCategory
    let newCategory = {id,CategoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropResponse(res)
  }

  return (
    <>
    <Row droppable="true" onDragOver={e=>dargOver(e)} onDrop={(e)=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col className='mb-2' sm={12} md={6} lg={4} xl={3}>
        <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
        </Col>
        )):<p className='fs-4 text-warning fw-bolder'>No Videos are uploaded yet!!!</p>
      } 
    </Row>
    </>
  )
}

export default View