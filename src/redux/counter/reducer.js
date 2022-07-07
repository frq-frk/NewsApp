import { DECREMENT, INCREMENT } from './action.js'

let initialState = {
    count : 0,
}

export const countReducer = (state=initialState, action) => {
    switch(action.type){

        case INCREMENT :
            return{
                count : state.count + action.payload
            }
            
        case DECREMENT :
            return{
                count : state.count - action.payload
            }

        default :
            return state;

    }
}
