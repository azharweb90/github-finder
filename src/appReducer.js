export const initialState = {
    users: [],
    loading: false,
    searchTerm: '',
    errorMessage: '',
    userDetails: {},
  }

// Use reducer works better with complex state
export function reducer(state, action){
    switch(action.type){
        case 'UPDATE_USERS':
            return {...state, users: action.payload};
        case 'UPDATE_LOADING':
            return {...state, loading: action.payload};
        case 'UPDATE_SEARCH_TERM': 
            // if(action.payload !== state.text) {
            //     return{...state, text: action.payload, inputMessage: ''};
            // }
            return{...state, searchTerm: action.payload};
        case 'UPDATE_ERROR_MESSAGE':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
}