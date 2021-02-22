import {resumeConstants} from '../action/constants';

const initialState = {
    loading:false,
    error:null,
    allresumes:{},
    profile:{}
}

const resumeReducer = (state = initialState,action)=>{
    switch(action.type){
        case resumeConstants.GET_RESUME_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case resumeConstants.GET_RESUME_SUCCESS:
            state = {
                ...state,
                allresumes:action.payload.resume,
                loading:false
            }
            break;
        case resumeConstants.GET_RESUME_FAILURE:
            state = {
                ...state,
                error:action.payload.error,
                loading:false
            }
            break;
    }  
    return state;
}

export default resumeReducer;