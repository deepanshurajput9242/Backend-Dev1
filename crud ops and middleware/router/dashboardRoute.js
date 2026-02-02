import express from 'express';
const router = express.Router();

router.get('/profile',(req,res)=>{
    res.status(200).json({
        message:"Welcome to profile"
    });
});

router.get('/report',(req,res)=>{
    res.status(200).json({
        message:"Welcome to report"
    });
});

export default router;