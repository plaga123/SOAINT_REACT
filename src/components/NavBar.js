import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

    const count = JSON.parse(localStorage.getItem('carrito'));

    const [state, setstate] = useState(0) 

    const getContar = ()=>{
        setstate(count);       
    }

    setTimeout(() => {
        getContar()
    }, 1000);

   
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> LOGO </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink 
                        exact activeClassName="active" 
                        to="/producto" 
                        className="nav-item nav-link"
                        > Products 
                    </NavLink>                   
                    <NavLink 
                        exact activeClassName="active" 
                        to="/cart" 
                        className="nav-item nav-link"
                        > Cart <span className="badge bg-secondary">{state.length}</span>  
                    </NavLink>                                  
                </div>            
            </div>
        </nav>
    )
}
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>