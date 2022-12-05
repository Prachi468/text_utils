import React from "react";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <div className="navbar-brand" >{props.Title}</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href ="/TextForm">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/About">{props.aboutText}</a>
            </li> */}
          </ul>
          {/* serch box */}
          <form className="d-flex" role="search">
           
            {/* mode */}
            <div className={`form-check form-switch m-2 text-${props.mode === 'light'?'dark':'light'} mx-1`}>
              <input className="form-check-input h-50 w-75" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
