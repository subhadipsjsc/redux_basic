export default function userReducer (state='' , action){
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                name: action.payload.user
            };
        default:
            return state
    }
    
}