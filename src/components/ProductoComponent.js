import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { MostarProducto } from './MostarProducto'; 


export const ProductoComponent = () => { 

    const {data,loading} = useFetch('https://fakestoreapi.com/products'); 

    console.log('Listado de Productos::: ',data)

    return (
        <div className="caja">
            {   
            loading ?      
                <p>Cargando ...</p>               
                :
                data.map(p =>(
                    <MostarProducto key={p.id} {... p} />
                ))                     
            }           
        </div>
    )
}
