import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <h1>Foodiezy</h1>
      </div>
      <div className='footer-about'>
        <ul>
          ABOUT FOODIZY
          <li>Who We Are</li>
          <li>Blog</li>
          <li>Work With Us</li>
          <li>Investor Relations</li>
          <li>Report fraud</li>
          <li>Press Kit</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          FOODIEVERSE
          <li>Foodiezy</li>
          <li>QuickIt</li>
          <li>Froom</li>
          <li>Foodiezy Land</li>
        </ul>
        <ul>
          <ul>
            FOR RESTAURANTS
            <li>Parter With Us</li>
            <li>Apps For You</li>
          </ul>
          <ul>
            FOR ENTERPRISES
            <li>Foodiezy For Enterprises</li>
          </ul>
        </ul>
        <ul>
          LEARN MORE
          <li>Privacy</li>
          <li>Securiy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
        <ul className='social-links'>
          SOCIAL LINKS
          <li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Facebook</li>
          </li>
          <li className='app-store'>
            <button>Download on the <br /><span>App Store</span></button>
          </li>
          <li className='google-play'>
            <button>Get it on <br /><span>Google Play</span></button>
          </li>
        </ul>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
          <span className="mb-3 mb-md-0 text-muted">© 2023 Foodiezy, Inc</span>
        </div>

      </footer>
    </div>
  )
}
