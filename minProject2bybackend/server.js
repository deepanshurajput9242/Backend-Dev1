// const http=require('http');
// const express=require('express');
// const app=express();
// const user=require('./data.js');
// app.get('/',(req,res)=>{
//     res.send("Home route accessed");
// });
// app.get('/user',(req,res)=>{
//     res.json(user);
//     // res.send("User route accessed");
// });
// app.listen(3000,()=>{
//     console.log("Server started at port 3000,http://localhost:3000");
    
// });
// app.get('/user/userprofile',(req,res)=>{
//     res.send("UserProfile route accessed");
// });
// app.get('/user/id',)
const  http=require('http');
const express=require('express');
const app=express();
const user=require('./data.js');

app.get('/' || "/home",(req,res)=>{
    res.send("Home route accessed");
});

app.get('/user',(req,res)=>{
    res.json(user);
})
//static route pehle
app.get('/user/profile',(req,res)=>{
    res.send("User profile route accessed");
});

//query paramater
app.get('/user/page',(req,res)=>{
    let name=req.query.name;
    let size=req.query.size;

    res.json({name,size})
})

//dynamic route baad me
app.get('/user/:id',(req,res)=>{
    const id=parseInt(req.paramas.id);
    let user=user.find((ele)=>ele.id===id);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).send('User not found');
    }
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000 , http://localhost:3000");
});