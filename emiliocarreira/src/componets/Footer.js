import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImg from './LogoImg';

function Footer() {

  

  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>SpaceX</h4>
            <LogoImg />
          </div>
          <div className="col-md-6">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li><a style={{textDecoration: 'none', color: 'white'}} href='https://www.instagram.com/spacex/?hl=en'>Instagrame</a></li>
              <li><a style={{textDecoration: 'none', color: 'white'}} href='https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>Twitter</a></li>
              <li><a style={{textDecoration: 'none', color: 'white'}} href='https://za.pinterest.com/marktoney/spacex/'>Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;