import React, { Component } from 'react';
import {  Link } from 'react-router-dom';


class navbar extends Component {






    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{width: '100%'}}>
            <Link to='/' style={{color:'white'}} className="navbar-brand" >Midway

            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                
                  <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lets Chat 
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/about'  className="dropdown-item" >
                   About 
                  </Link>

                    <div className="dropdown-divider"></div>

                    <Link to='/directions' className="dropdown-item" >
                    Directions
                    </Link>
                    
                    <div className="dropdown-divider"></div>

                    <Link to='/forms' className="dropdown-item"> 
                    Forms
                    </Link>
                  </div>
                  
                </li>
                
              </ul>
              
            </div>
          </nav>
        );
    }
}

export default navbar;