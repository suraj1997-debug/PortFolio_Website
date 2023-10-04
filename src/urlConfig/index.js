// import env from 'dotenv';

// env.config();

// const baseUrl = process.env.REACT_APP_URL
const baseUrl = `https://portfolio-backend-server-6wdh.onrender.com`;

export const urlgenerate = (filename) =>{
    return `${baseUrl}/public/${filename}`
}

export const url = `${baseUrl}/api`

