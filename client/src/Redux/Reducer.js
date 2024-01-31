import { GETALLCONTACTS } from "./ActionTypes"

const initialState={
    contacts : []
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETALLCONTACTS : return {...state, contacts : action.payload }
    default: return state
            
    }
}

export default Reducer