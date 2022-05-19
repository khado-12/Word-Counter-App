import React from 'react'
import prototype from 'prop-types';

import {Link} from 'react-router-dom';
export default function Header(props) {
  return (
    <div>
      <>
        <nav id='p2' className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"  href="#">AboutUs</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>

              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            
                <div className='d-flex'>
                  </div><label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                  
                
                {/* <label for="exampleColorInput" className="form-label">Color picker</label>
               <input type="color" className="form-control form-control-color" onClick={props.btnColor} id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}
              </div>
            </div>
          </div>
        </nav >
        
      </>
    </div>




  )
}
Header.Prototype = {
  title: prototype.string,
  AboutText: prototype.string
}
Header.defaultProps = {
  title: "Icoder",
  AboutText: "AboutCoder"
} 