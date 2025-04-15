export const initialState = {
    letters :[],
    
}


export function reducer(state, action) {
    switch (action.type) {

        case 'ADD_LETTER' :
         const letters = [...state.letters, action.payload]
         return {...state, letters : letters}

        case 'SHUFFLE_LETTER' :
            const shuffledLetters = [...state.letters].sort(() => Math.random()-0.5 )
            return {...state, letters : shuffledLetters}

        default:
            return state;
    }
} 