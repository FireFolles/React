export const initialState = {
    numbers :[],
    
}


export function reducer(state, action) {
    switch (action.type) {

        case 'ADD_NUMBER' :
         const numbers = [...state.numbers, action.payload]
         return {...state, numbers : numbers}

        case 'SHUFFLE_number' :
            const shuffledNumbers = [...state.numbers].sort(() => Math.random()-0.5 )
            return {...state, numbers : shuffledNumbers}

        default:
            return state;
    }
} 