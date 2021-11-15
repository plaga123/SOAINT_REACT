import React from 'react'

export const TableItem = ({carrito,index}) => {
    return (
        <>
            <li
            key={ carrito.id }
            className="list-group-item"
            >  
             {carrito.title}
       
        </li>
            
        </>
    )
}
