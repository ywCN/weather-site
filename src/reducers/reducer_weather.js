import { FETCH_WEATHER } from '../actions/index'; // Note: must use {}

export default function(state = [], action) {
    // console.log('Action received:', action);
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Request is:', action.payload.data);
            if (!action.payload.data) {
                return state;
            }
            // action.payload.data is from the Object structure
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // ES6
    }
    return state;
}
