import {createStore } from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'
const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        incrementby1(state){
            state.counter++
        },
        decrementby1(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.payload

        },
        decrease(state, action){
            state.counter = state.counter - action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
        
    }
})


// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'incrementby1'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrementby1'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrease'){
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type == 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     // if(action.type === 'incrementby5'){
//     //     return {
//     //         counter: state.counter + 5
//     //     }
//     // }
//     // if(action.type === 'decrementby5'){
//     //     return {
//     //         counter: state.counter - 5
//     //     }
//     // }
//     else{
//         return state
//     }
// }



const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;