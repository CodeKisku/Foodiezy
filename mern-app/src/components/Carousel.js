import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner" id='carousel' style={{ "objectFit": "contain !important" }}>
          <div className='carousel-caption' style={{ "zIndex": "100" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/800x400/?burger" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/800x400/?pizza" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/800x400/?biryani" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type='button' data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type='button' data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  )
}
