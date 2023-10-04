import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import burgerImg from '../assets/img/burger-carousel.jpeg'
import pizzaImg from '../assets/img/pizza-carousel.jpeg'
import biryaniImg from '../assets/img/biryani-carousel.jpeg'


export default function Home() {

  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])


  const loadData = async () => {
    let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/foodData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()

    setFoodItem(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])







  return (
    <div>
      <div> <Navbar /> </div>

      <div id="carouselExampleInterval" className="carousel slide overlay" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel" style={{ "objectFit": "contain !important" }}>
          <div className='carousel-caption' style={{ "zIndex": "100" }}>
            <div className="foodiezy-logo ">
              <h1>Foodiezy</h1>
              <p>Find the best restaurants, cafés<br /> and bars in India</p>
            </div>
          </div>
          <div className='carousel-caption' style={{ "zIndex": "100" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div >
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={burgerImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pizzaImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={biryaniImg} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container' >
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}!</div>
                  <hr />
                  {foodItem !== [] ?
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <Card foodItem={filterItems}
                              options={filterItems.options[0]}
                            ></Card>
                          </div>
                        )
                      })
                    : <div>No Such Data Found</div>
                  }
                </div>
              )
            })
            : ""
        }
      </div>
      <div> <Footer /> </div>
    </div >
  )
}
