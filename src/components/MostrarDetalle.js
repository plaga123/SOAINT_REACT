import React, { useEffect, useReducer } from 'react'
import { CartLista } from './CartLista';
import Swal from 'sweetalert2';

const init = () => {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

export const MostrarDetalle = ({id,title,image,description,category,price}) => {  

    const [ carts , dispatch ] = useReducer(CartLista,[],init);

    const producto = {
        id:Math.random(1000,9999),
        title,
        price,
          
    }

    const action ={
        type:'add',
        payload:producto
    }

    const addProducto = ()=>{        
        dispatch( action );
        Swal.fire(
            'Producto agregado al carrito',
           'Presione el boton para continuar',
           'success'
         )
    }

    useEffect( ()=> {
        localStorage.setItem('carrito', JSON.stringify( carts ) );
    }, [carts]); 

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                <img src={image} class="img-fluid img-producto" alt="..."></img>
                </div>
                <div className="col-md-6 mt-5">

                    <div className="row card card-customer">
                        <div className="col-md-12">
                            <h3>{title}</h3>
                        </div>
                        <div className="col-md-12 mt-5">
                             <p><strong> Product description </strong></p>
                        </div>
                        <div className="col-md-12">
                            <p>{description}</p>
                        </div>
                        <div className="col-md-12">
                            <p> <strong>Product category </strong>{category}</p>
                        </div>
                        <div className="col-md-12 mt-5">
                            <button className="btn btn-primary" onClick={addProducto}>Add to Cart</button>
                        </div>
                    </div>                   
                </div>
            </div>            
        </div>
    )
}
