import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Footer Title</h4>
            <p>Some content here</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main St.</li>
              <li>Anytown, USA 12345</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;