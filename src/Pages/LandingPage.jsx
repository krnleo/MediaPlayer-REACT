import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='container '>
    <div className="row align-items-center m-5">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Media Player App. will allow you to add and remove thier uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities.</p>
        <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img className='img-fluid' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" />
      </div>
    </div>
    <div className="features mb-5">
      <h3 className='text-center'>Features</h3>
      <div className="cards mt-5 d-flex justify-content-between">
        {/* cards 1 */}
        <Card style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://clipart-library.com/images/pc7reEGKi.gif" />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
              User can upload , view and remove the vedios.
            </Card.Text>
           </Card.Body>
        </Card>
        {/* cards 2 */}
        <Card style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://designmodo.com/wp-content/uploads/2015/09/icon_gif.gif" />
          <Card.Body>
            <Card.Title>Categorize Videos</Card.Title>
            <Card.Text>
              User can categories the vedios according to their performance using drag and drop features.
            </Card.Text>
           </Card.Body>
        </Card>
        {/* cards 3 */}
        <Card style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://imgvisuals.com/cdn/shop/products/animated-update-time-linear-ui-icon-623356.gif?v=1697071161" />
          <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
              User are able to see the history of watched vedios.
            </Card.Text>
           </Card.Body>
        </Card>
      </div>
    </div>
    <div className="row mt-5 border rounded align-items-center p-5">
      <div className="col-lg-5">
      <h3 className='text-warning mb-5'>Simple, Fast and Poweful</h3>
      
        <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at voluptatibus similique, sequi a temporibus hic ex eos harum!</p>
        <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at voluptatibus similique, sequi a temporibus hic ex eos harum!</p>
        <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at voluptatibus similique, sequi a temporibus hic ex eos harum!</p>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
      <iframe width="600" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default LandingPage