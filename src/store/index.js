import {createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'incrementby1'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrementby1'){
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'incrementby2'){
        return {
            counter: state.counter + 2
        }
    }
    if(action.type === 'decrementby2'){
        return {
            counter: state.counter - 2
        }
    }
    if(action.type === 'incrementby5'){
        return {
            counter: state.counter + 5
        }
    }
    if(action.type === 'decrementby5'){
        return {
            counter: state.counter - 5
        }
    }
    else{
        return state
    }
}

const store = createStore(counterReducer)

export default store;