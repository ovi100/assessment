import React from 'react';
import Navbar from '../navbar/Navbar';
import './Home.css';
import cover from './images/cover.jpg';
import abImage from './images/sec.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="home-carousel">
          <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cover} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>A picture is worth a thousand words</h5>
                  <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                  <button type="button" className="btn btn-outline-danger">View Gallery</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="about-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="images">
                  <img src={abImage} className="ab-img ab-img-1" alt="..." />
                  <img src={abImage} className="ab-img ab-img-2" alt="..." />
                  <img src={abImage} className="ab-img ab-img-3" alt="..." />
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="text">
                  <h4>About Us</h4>
                  <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
