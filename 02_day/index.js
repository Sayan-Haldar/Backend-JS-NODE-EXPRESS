import express from 'express'
const app=express();
app.get('/',(req,res)=>{
    res.send(`server is ready`);
})

const port = process.env.PORT || 3000;

app.listen(process.env.PORT,()=>{
    console.log(`app listining on port ${port}`);
})