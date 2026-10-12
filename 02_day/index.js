import express from 'express'
const app=express();

app.get('/',(req,res)=>{
    res.send(`server is ready`);
})

app.get('/api/joke',(req,res)=>{
    const jokes=[{a:7,b:"hello"},{a:45,b:"hi"}];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`app listining on port ${port}`);
})