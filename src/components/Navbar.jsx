import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './navbar.css';
const Navbar = () => {
  return (
    <>
     {/* <!-- From Uiverse.io by SelfMadeSystem -->  */}
       <div className="row">
        <div className="col-md-12 d-flex justify-content-center bg-secondary">
                 <div className="nav">
        <div className="container">
          <NavLink className="btn" to='/'>Home</NavLink>
          <NavLink className="btn" to='/userdata'>Products</NavLink>
          
          <svg className="outline" overflow="visible" width={400} height={60} viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="rect" pathLength={100} x={0} y={0} width={400} height={60} fill="transparent" strokeWidth={5} />
          </svg>
        </div>
      </div>
        </div>
       </div>

    </>
  );
}



export default Navbar;
