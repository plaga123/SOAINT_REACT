import React, { useEffect, useReducer } from 'react'
import { CartLista } from './CartLista'
// import { TableItem } from './TableItem';

const init = () => {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

export const Cart = () => {

    const [ carts , dispatch] = useReducer(CartLista,[],init);

    const borrarCart = (i) =>{     
        const action = {
            type: 'delete',
            payload: i
        }
        dispatch( action );

    }  
    
    useEffect( ()=> {
        localStorage.setItem('carrito', JSON.stringify( carts ) );
    }, [carts]); 

    return (
        <>  
            <h2 className="text-center mt-2">Carrito</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                <table className="table">
                    <thead>
                        <tr>                      
                            <th scope="col">Titulo</th>
                            <th scope="col">Precio</th>                        
                            <th scope="col">Borrar</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map( (item, i) => (
                                <tr key={i}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><button className="btn btn-danger" onClick={ () => borrarCart( item.id ) }>X</button></td>
                                </tr>
                            ))
                        }                      
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
