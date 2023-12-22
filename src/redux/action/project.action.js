import axios from '../../components/helpers/axios';
import {projectConstants, projectCategoriesConstants} from './constants';

export const getProjects = (slug) =>{
    return async dispatch=>{
        dispatch({
            type:projectConstants.GET_PROJECT_REQUEST
        })
        const res = await axios.get(`/getProjectsByCategoriesSlug/${slug}`);

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

export const getProjectCategories = () => {
    return async dispatch=>{
        dispatch({
            type: projectCategoriesConstants.GET_PROJECT_CATEGORIES_REQUEST
        })
        const res = await axios.get('/project/get-categories');

        if(res.status === 200){
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORIES_SUCCESS,
                payload:{
                    categories:res.data.categories
                }
            })
        }
        else{
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORIES_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}

export const getSingleProjectCategory = (slug) => {
    return async dispatch=>{
        dispatch({
            type: projectCategoriesConstants.GET_PROJECT_CATEGORY_REQUEST
        })
        const res = await axios.get(`/getProjectCategoryBySlug/${slug}`);

        if(res.status === 200){
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORY_SUCCESS,
                payload:{
                    category:res.data.category
                }
            })
        }
        else{
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORY_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}

export const getSingleProjectCategoryByProjectSlug = (slug) => {
    return async dispatch=>{
        dispatch({
            type: projectCategoriesConstants.GET_PROJECT_CATEGORIES_REQUEST
        })
        const res = await axios.get(`/getProjectCategoryByProjectSlug/${slug}`);

        if(res.status === 200){
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORIES_SUCCESS,
                payload:{
                    category:res.data.category
                }
            })
        }
        else{
            dispatch({
                type:projectCategoriesConstants.GET_PROJECT_CATEGORY_BY_PROJECT_SLUG_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}