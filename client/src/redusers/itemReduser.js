import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types'


const initialState = {
        items: [
            {name: 'Alex'},
            {surname: 'Yamkovoi'}
        ]

};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS: return {...state}
        default: return state;


    }
}