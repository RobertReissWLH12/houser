// import axios from "axios"

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    img: "",
    mortgage: "",
    rent: ""
};

const UPDATE = "UPDATE";
const CLEAR = "CLEAR";
const STEP_ONE = "STEP_ONE"




function myReducer(state = initialState, action) {
    // let { type, payload } = action
    switch (action.type) {
        case UPDATE:
            return { ...state, ...action.payload };
        case CLEAR:
            return { initialState }
        default:
            return state;
    }
}

export default myReducer;

export function updateStore(Obj){
    return {
        type: UPDATE,
        payload: Obj
    }
}

export function stepOne(name, address, city, state, zip) {
    return {
        type: STEP_ONE,
        payload: {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    }
}
export const clearStore = () => {
    return {
        type: UPDATE
    }
}