import express from 'express';
const app=express();
import { logFun} from './middleware.js';
import userRouter from './router/userRouter.js';
import registrationRouter from './router/registrationRoute.js';
import dashboardRouter from './router/dashboardRoute.js';
app.use('/dashboard',dashboardRouter); //mounting the dashboardRouter at /dashboard path
app.use('/api',userRouter); //mounting the userRouter at /api path
app.use('/register',registrationRouter); //mounting the registrationRouter at /auth path
import {config} from 'dotenv';
config();//to load .env file
app.use(express.json());//middleware to parse json body

let port=process.env.PORT || 3000;

//global middleware
app.use(logFun); //mounting the middleware , isse har request pe ye middleware chalega and sare requests ko log karega
let data=[
    {
        id:1,
        username:"yash",
        password:"yash123"
    },
    {
        id:2,
        username:"john",
        password:"john123"
    }
]

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});