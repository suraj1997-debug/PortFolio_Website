import env from 'dotenv';

env.config();

const baseUrl = process.env.REACT_APP_URL

export const urlgenerate = (filename) =>{

    return `${filename}`
}

export const url = `${baseUrl}/api`

