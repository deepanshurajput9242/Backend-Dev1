import express from 'express';

const router = express.Router();

router.post('/login',(req,res)=>{
    res.status(200).json({
        message:"login route"
    });
});

router.get('/signup',(req,res)=>{
    res.status(200).json({
        message:"signup route"
    });
});

export default router;