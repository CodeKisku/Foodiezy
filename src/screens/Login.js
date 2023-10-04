import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json)

    if (!json.success) {
      alert("Enter valid credentials")
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email)
      localStorage.setItem("authToken", json.authToken)
      navigate("/")
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
            <h2 className='mb-5 text-center'>Login to Your Account</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} id='exampleInputEmail1' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} id='exampleInputPassword1' onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 btn btn-warning">New user? Sign Up</Link>
        </form>
      </div>

      <div className='mt-5'> <Footer /> </div>
    </div>
  )
}
