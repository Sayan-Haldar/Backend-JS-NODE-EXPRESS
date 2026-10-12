require('dotenv').config()
const express=require('express')
const app=express()
//const port=3000

app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>')
})

app.get('/twitter',(req,res)=>{
    res.send('HI!')
})

app.get('/login',(req,res)=>{
    res.send('<p> Login </p>')
})

const hello = "Hello GitHub!";
app.get('/github', (req, res) => {
    res.json({ a: hello });
});

app.listen(process.env.PORT,()=>{
    console.log(`app listining on port ${process.env.PORT}`);
})