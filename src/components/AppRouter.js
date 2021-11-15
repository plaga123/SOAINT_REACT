import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  
import { NavBar } from './NavBar';
import { ProductoComponent } from './ProductoComponent';
import { ProductoDetalle } from './ProductoDetalle';
import { Cart } from './Cart';
import { Home } from './Home';






export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/producto" component={ ProductoComponent } />
                        <Route exact path="/productoDetalle/:id" component={ ProductoDetalle } />
                        <Route exact path="/cart" component={ Cart } />                       
                        <Route exact path="/" component={ Home } />                       
                        
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
