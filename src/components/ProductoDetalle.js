import React, { useEffect,useState } from 'react'
import { useParams } from "react-router";
import { MostrarDetalle } from './MostrarDetalle';
import axios from 'axios';


export const ProductoDetalle = () => {

    let { id } = useParams();

    const [ProductoDetalle, setProductoDetalle] = useState(null)

    const getProductoOne =  async () =>{
        await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(resp =>{                
                setProductoDetalle(resp.data);                
            })
            .catch(err =>{
                console.log('Error ',err)
            })
          
    }

    useEffect( () =>{
        getProductoOne();
    },[]) 


    console.log("Producto detalle ::", ProductoDetalle)

    return (
        <div>
            <MostrarDetalle {... ProductoDetalle } />                   
        </div>
    )
}
