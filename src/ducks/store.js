import {createStore} from "redux";
import { create } from "domain";

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

export const updateStore = Obj => {
    return {
        type: UPDATE,
        payload: Obj
    }
}

export const clearStore = () => {
    return {
        type: UPDATE
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
            return {...state, ...action.payload};
            case CLEAR:
                return {initialState}
                default:
                    return state;
    }
}

export default createStore(reducer);