let ini_state ={
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
};

export default function shopReducer (state = ini_state , action){
    switch (action.type) {
        case 'ADD_SHOP_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state
    }   
}