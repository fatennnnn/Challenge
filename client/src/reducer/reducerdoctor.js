import { DOCTOR_LOADING, GET_DOCTOR } from '../actions/actiontype'
const initialState = { doctors: [], loading: false };
export const reducerDoctor = (state = initialState, action) => {
         switch (action.type) {
           case GET_DOCTOR:
             return { ...state, doctors: action.payload, loading: false };
           case DOCTOR_LOADING:
             return { ...state, loading: true };

           default:
             return state;
         }
       };
export default reducerDoctor;