import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import imgage from '../../images/Screenshot (145).png'
const Navbar = () => {
    return (
        <nav className="navbar-border navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" ><img style={{width:'10rem'}} src={imgage} alt="" /></a>
            </div>

  <div className="container-fluid">
  <form className="d-flex search input-group w-auto">
  <span className="input-group-text border-0" id="search-addon">
      <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
      
        type="search"
        class="form-control rounded "
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
     
    </form>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
     
    </button>


    <div className="collapse navbar-collapse" id="navbarRightAlignExample">

      <ul className="navbar-nav navi ms-auto me-5 mb-2 mb-lg-0">
       
       
      
        <li className="nav-item me-5   dropdown ">
          <a
            className="nav-link dropdown-toggle "
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Discover
          </a>
       
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item  " href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item " href="#">Another action</a>
            </li>
            <li><hr className="dropdown-divider " /></li>
            <li>
              <a className="dropdown-item " href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Market Place
          </a>
       
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
      
        
      
      </ul>
      <button type="button" className='button'>Create NFT</button>
     
    </div>
  
  </div>

</nav>
    );
};

export default Navbar;