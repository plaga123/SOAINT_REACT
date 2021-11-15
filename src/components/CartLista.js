

export const CartLista = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( cart => cart.id !== action.payload );        

        default:
            return state;
    }


}