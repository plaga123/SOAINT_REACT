import React from 'react'
import { Link } from 'react-router-dom';

export const MostarProducto = ({id,title,image,price}) => {


 
    return (
        <>
            <div className="card" key={id}>
            <img src={image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    {/* <p className="card-text">{description}</p> */}
                    <p className="card-text">{price}</p>
                    <Link exact to={'productoDetalle/'+id} className="nav-item nav-link"> ver detalle </Link>            
                    {/* <button className="btn btn-primary">ver detalle</button> */}
                </div>
            </div>            
        </>
    )
}
