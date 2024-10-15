import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar1  ">
        <div class="container-fluid bg-info-subtle text-info-emphasis nav1 ">
          <div className="nav justify-content-center ">
          <Link class="navbar-brand fw-bold" to="/"><img src={Logo} /></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse nav justify-content-center navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link-dark link-opacity-50-hover " to="/Template">Template</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark link-opacity-50-hover " to="/Backdrop">Backdrop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark link-opacity-50-hover " to="/Pricelist">Testimoni</Link>
              </li>
              <li className="nav-item">
                <div className="card" >
                <Link className="nav-link link-dark link-opacity-50-hover " to="/FAQ">FAQ</Link>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav >

    </>
  )
}

export default Navbar;
