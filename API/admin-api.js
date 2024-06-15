
//create user api app
const exp=require('express')
const AdminApp=exp.Router();

// const bcryptjs=require('bcrypt')
// const expressAsyncHandler=require("express-async-handler")
// const jwt=require('jsonwebtoken');
// const verifyToken=require('../Middlewares/verifyToken')
// const { use } = require('react');
// require('dotenv').config()
const commonApp=require('./common-api')

AdminApp.get('/test-admin',(req,res)=>{
    res.send({message:"This from admin api"})
})

// let usercollection;
// let articlescollection;
//get user collection app(middleware)
// userApp.use((req,res,next)=>{
//     usercollection=req.app.get('usercollection')
//     articlescollection=req.app.get('articlescollection')
//     next()
// })

//user registration route
// userApp.post('/user',expressAsyncHandler(async(req,res)=>{
//     //get user resource from client
//     const newUser=req.body;
//     //check for duplicate user basec on username
//     const dbuser=await usercollection.findOne({username:newUser.username})
//     //if user found in db
//     if(dbuser!=null){
//         res.send({message:"User existed"})
//     }else{
//         //hash the password
//         const hashedPassword=await bcryptjs.hash(newUser.password,6)
//         //replace plain password with hashed password
//         newUser.password=hashedPassword;
//         // create user
//         await usercollection.insertOne(newUser)
//         //send response
//         res.send({message:"User created"})
//     }
// }))


// //install: npm install express-async-handler (to handle the asynchronous errors in the code) it will handle errors to the handler that we are provide, so no need to write try-catch

// //user login route
// userApp.post('/login',expressAsyncHandler(async(req,res)=>{
//     //get cred obj from client
//     const userCred=req.body;
//     //check for username
//     const dbuser=await usercollection.findOne({username:userCred.username})
//     if(dbuser===null){
//         res.send({message:"Invalid username"})
//     }else{
//     //check for password
//     const status=await bcryptjs.compare(userCred.password,dbuser.password)
//     if(status===false){
//         res.send({message:"Invalid password"})
//     }else{
//         //create jwt token and encode it (for this install (npm install jsonwebtoken)) here we are using username to find which user is login into the account
//         const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:'1d'})
//         //send response
//         res.send({message:"login success",token:signedToken,user:dbuser})
//         }
//     }
// })

// )

// //get articles of all users
// userApp.get('/articles',verifyToken,expressAsyncHandler(async(req,res)=>{
//     //get articlescollection from express app
//     const articlescollection=req.app.get('articlescollection')
//     //get all articles
//     let articlesList=await articlescollection.find({status:true}).toArray()
//     //send response
//     res.send({message:"articles",payload:articlesList})
// }))



// //post comments for an article by article by article Id
// userApp.post('/comment/:articleId',verifyToken,expressAsyncHandler(async(req,res)=>{
//     //get user comment obj
//     const userComment=req.body;
//     const articleIdFromUrl=(+req.params.articleId);
//     //insert username object array of articles by id
//     let result=await articlescollection.updateOne({articleId:articleIdFromUrl.articleId},
// {$addToSet:{Comments:userComment}})
//     console.log(result)
//     res.send({message:"Comment added or posted"})
// }));


//export author app
module.exports=AdminApp;