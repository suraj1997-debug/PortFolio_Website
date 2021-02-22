import {projectConstants} from '../action/constants';

const initialState = {
    loading:false,
    projects:[],
    project:{},
    error:null
}

const projectReducer = (state = initialState,action) =>{
    switch(action.type){
        case projectConstants.GET_PROJECT_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case projectConstants.GET_PROJECT_SUCCESS:
            state={
                ...state,
                projects:action.payload.projects,
                loading:false
            }
            break;
        case projectConstants.GET_PROJECT_FAILURE:
            state={
                ...state,
                error:action.payload.error,
                loading:false
            }
            break;
            case projectConstants.GET_PROJECT_BY_SLUG_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case projectConstants.GET_PROJECT_BY_SLUG_SUCCESS:
            state={
                ...state,
                project:action.payload.project,
                loading:false
            }
            break;
        case projectConstants.GET_PROJECT_BY_SLUG_FAILURE:
            state={
                ...state,
                error:action.payload.error,
                loading:false
            }
            break;
        }
        return state;
}

export default projectReducer;