import { Store, action } from "../types";

const defaultStore:Store = {
    appliedFilters: []
}

export default function reducer(state:Store=defaultStore, action:action):Store {
    if (action.type == 'applyFilter')
        if (state.appliedFilters.includes(action.payload)) return state;
        else return {
            ...state,
            appliedFilters: [...state.appliedFilters, action.payload]
        }
    
    if (action.type == 'removeFilter') {
        return {
            ...state,
            appliedFilters: state.appliedFilters.filter(i => i != action.payload)
        }
    }

    if (action.type == 'replaceFilters') {
        return {
            ...state,
            appliedFilters: action.payload
        }
    }
    
    return state
}