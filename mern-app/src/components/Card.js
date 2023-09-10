import React from 'react'

export default function Card(props) {

  let options = props.options
  let priceOptions = Object.keys(options)

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img className="card-img-top" src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center">{props.foodName}</h5>
            <p className="card-text text-center fs-6 fst-italic fw-lighter">{props.desc}</p>
            <div className='container w-100'>
              <select className="m-2 h-100 bg-success rounded" style={{ "color": "#fff" }}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                  )
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" style={{ "color": "#fff" }}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className='d-inline h-100 fs-5'>Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
