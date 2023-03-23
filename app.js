const express= require('express')
const app = express()
const path = require('path')
let port=8000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'pugfiles'))

app.use('/pictures', express.static(process.cwd() + '/pictures'));
app.use('/files', express.static(process.cwd() + '/files'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})
app.get('/resume',(req,res)=>{
    res.status(200).render('resume.pug')
})

app.post('/', (req, res)=>{
    if(req.body.Name=='' || req.body.Email=='' || req.body.WorkOpoortunities==''){
    console.log("Invalid Entry!");
}
    else{
        console.log(req.body.Email)
    }
    res.status(200).render('index.pug')
})

app.listen(port,()=>{
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
