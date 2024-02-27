import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer className="netflix-footer">
        <h5>Questions? Contact us.</h5>
    <div className="netflix-footer__container">
      <div className="netflix-footer__column">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
      </div>

      <div className="netflix-footer__column">
        <ul>
          <li>Job</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div className="netflix-footer__column">
        <ul>
          <li>Account</li>
          <li>Way to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
      </div>

      <div className="netflix-footer__column">
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    <div className="netflix-footer__text">
      <p>Netflix India</p>
    </div>
  </footer>
  )
}

export default Footer