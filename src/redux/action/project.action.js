import axios from '../../components/helpers/axios';
import {projectConstants} from './constants';

export const getProjects = () =>{
    return async dispatch=>{
        dispatch({
            type:projectConstants.GET_PROJECT_REQUEST
        })
        const res = await axios.get('/project/display');

        if(res.status === 200){
            dispatch({
                type:projectConstants.GET_PROJECT_SUCCESS,
                payload:{
                    projects:res.data.projects
                }
            })
        }
        else{
            dispatch({
                type:projectConstants.GET_PROJECT_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}


export const getprojectBySlug = (slug) =>{
    return async dispatch=>{
        dispatch({
            type:projectConstants.GET_PROJECT_BY_SLUG_REQUEST
        })
        const res = await axios.get(`/getprojectBySlug/${slug}`);

        if(res.status === 200){
            const {project} = res.data;
            dispatch({
                type:projectConstants.GET_PROJECT_BY_SLUG_SUCCESS,
                payload:{
                    project
                }
            })
        }
        else{
            const {error} = res.data;
            dispatch({
                type:projectConstants.GET_PROJECT_BY_SLUG_FAILURE,
                payload:{
                    error
                }
            })
        }
    }
}