import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //https://www.youtube.com/watch?v=FZYhL_bVQUQ
  //https://www.youtube.com/embed/FZYhL_bVQUQ
  
  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
  }
}
  const handleUpload = async ()=>{
    const {id,caption,url,link}= uploadVideo
    if(!id || !caption || !url || !link){
      alert("uploading form is incomplete. Please fill form completely!!!")
    }else{
      //store uploadVedio in json server
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        //success
        handleClose()
        //reset uploadVideo
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        //share result data to view component
        setUploadVideoResponse(result.data)
      }else{
      alert(result.message)
    }
  }
}
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} style={{color:'white'}} className='btn'><i style={{height:'40px'}} class="fa-solid fa-circle-plus fa-2x"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
         >
          {/* backdrop="static"
        keyboard={false} */}
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <p>Please Fill The Following details</p>
        <Modal.Body className='border rounded m-2'>
        <FloatingLabel
        controlId="floatingInputId"
        label="Upload Video ID"
        className="mb-3">
        <Form.Control type="text" placeholder="Upload Video ID" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputCaption" label="Upload Video Caption" className="mb-3">
        <Form.Control type="text" placeholder="Upload Video Caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputImg" label="Upload Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Upload Video Image URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputLink" label="Upload Youtube Video Link" className="mb-3">
        <Form.Control type="text" placeholder="Upload Youtube Video Link" onChange={(e)=>getYoutubeEmbedLink(e)}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add