import React from 'react';
import './Navbar2.css'
const Navbar2 = () => {
    return (
        <nav class="m-2  border-bottom navbar navbar-expand-lg navbar-light ">
       
        <div class="container-fluid">
         
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
      
         
          <div
            class="navbar2  collapse navbar-collapse  justify-content-center"
            id="navbarCenteredExample"
          >
           
            <ul class=" navbar-nav mb-2   mb-lg-0">
              <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Newest</a>
              </li>
              <li class="nav-item">
                <a className="nav-link active" href="#">Oldest</a>
              </li>
              <li class="nav-item">
                <a className="nav-link active" href="#">Recent Solid</a>
              </li>
            
             
            </ul>
          
          </div>
        <ul class="bg-light nav shadow navbar-nav mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Short By
          </a>
       
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        
        </ul>
        <ul class="bg-light shadow navbar-nav mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            NFT Platforms
          </a>
       
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        
        </ul>
        </div>
      
      </nav>
    );
};

export default Navbar2;