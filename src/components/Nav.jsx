import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({search,setSearch}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link text-white active" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="post" >Post</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="about">About</Link>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={(e)=>e.preventDefault()}>
                  <input className="form-control me-2" type="text" id='search' placeholder='Search Posts...' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Nav;