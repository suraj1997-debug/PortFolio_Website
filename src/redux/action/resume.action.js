import axios from '../../components/helpers/axios';
import {resumeConstants} from '../action/constants';



export const getResume = () =>{
    return async dispatch=>{
        dispatch({
            type:resumeConstants.GET_RESUME_REQUEST
        })

        const res = await axios.get('/getResume');

        if(res.status === 200){
            const{getResume} = res.data;
            dispatch({
                type:resumeConstants.GET_RESUME_SUCCESS,
                payload:{
                    resume:{
                        getResume
                    }
                }
            })
        }
        else{
            const {error} = res.data;
            dispatch({
                type:resumeConstants.GET_RESUME_FAILURE,
                payload:{
                    error
                }
            })
        }
    }
}


