const path=require('path')
const fs=require('fs')
const express=require('express')
const { json, response } = require('express')
const cors=require('cors')
const cookieparser=require('cookie-parser')
const app=express()
const {logger, errLog}=require('./middleware/eventLogs')
const corsOptions={
    // origin:'*',
    // origin:['https://www.google.com','http://localhost:3000','http://localhost:3001'],
    origin:(origin,callback)=>{
        console.log(origin);
        const allowedOrigin=['https://www..com','http://localhost:3000','http://localhost:3001']
        // if(allowedOrigin.includes(origin))
        if(allowedOrigin.indexOf(origin)!==-1||!origin){
            // response.header('Access-Control-Allow-Credentials',true)
            callback(null,true)}
            else{
                callback(new Error('Not Allowed by CORS'))
            }
        },
        optionsSuccessStatus:200,
        methods:'*'
}


app.set('view engine','jade')
app.use(cookieparser())
app.use(cors(corsOptions))
app.use(logger,errLog)
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const fetchApi=require('./router/restApi')
const getroutes=require('./router/getRoutes')
const signupmodelroutes=require('./router/signupmodelroutes')
const signinroutes=require('./router/signinroute')
const refreshAuth=require('./router/refreshauth')
const api=require('./router/api/updateuser')


app.use('/',fetchApi)
app.use('/',signinroutes)
app.use('/',signupmodelroutes)
app.use('/',refreshAuth)
app.use('/',api)
app.use('/',getroutes)
app.all('*',(req,resp)=>{
    console.log(req.body,req.headers)
    // resp.status(404).sendFile(path.join(__dirname,'views','404error.jade'),{errmessage:new Error(`No path present as ${req.path}`)})  // ye sendFile method me exact file bhej deta hai client ko without applying css or others . agar css vagerah ke sath bhejni hai to app.use(express.static(path.join(__dirname,'/public' ya serve karne waali file ka path)))   use karo.
    // req.accepts()

if (req.accepts(['html','jade','text/plain'])){
    resp.status(404).render(path.join(__dirname,'views','404error.jade'),{errmessage:new Error(`No path present as ${req.path}`)})
}else if(req.accepts('json')){
    resp.status(404).json({err:"no path"})
}else{
    resp.status(404).send("no path found . Error 404")
}


})



app.listen(3001,()=>console.log('server has started listening'))