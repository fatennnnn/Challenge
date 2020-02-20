import { DOCTOR_LOADING,  GET_DOCTOR } from "./actiontype"
import axios from "axios";
export const setContactLoading = () => ({
         type: DOCTOR_LOADING
       });

       export const get_doct = () => dispatch => {
         dispatch(setContactLoading());
         axios.get("/doctor/").then(res =>
           dispatch({
             type: GET_DOCTOR,
             payload: res.data
           })
         );
};
        export const add_doct = doctor => dispatch => {
          axios.post(`/doctor/`, doctor).then(res => dispatch(get_doct()));
        };
       export const del_doct = id => dispatch => {
                axios.delete(`/doctor/${id}`).then(res => dispatch(get_doct()));
              };
       export const edit_doct = (id, newDoctor) => dispatch => {
                axios
                  .put(`/doctor/${id}`, newDoctor)
                  .then(res => dispatch(get_doct()));
              };
      
