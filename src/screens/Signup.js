// import { Alert } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Signup() {

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    })
    const json = await response.json()

    if (!json.success) {
      alert("Enter valid credentials")
    }

    if (json.success) {
      alert("Account Created Successfully, Please login Now")
      navigate("/login")
    }

  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div> <Navbar /> </div>
      <div className='container mt-5 border border-black p-5 rounded'>
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className='mb-5 text-center'>Sign Up</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} id='exampleInputEmail1' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} id='exampleInputPassword1' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id='geolocation' onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-warning">Already a user?</Link>
        </form>
      </div>
      <div className='mt-5'> <Footer /> </div>
    </div>
  )
}
