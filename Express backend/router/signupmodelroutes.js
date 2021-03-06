const express=require('express')
const app=express()
const router=express.Router()
const User=require('../models/userModel')
const bcrypt=require('bcrypt')
router.post('/signup',async (req,res)=>{
    const data=req.body
    data.password= await bcrypt.hash(data.password,7)
    console.log(req.body);
    const obj1=new User({
        name:data.name,
        roles:data.roles,
        email:data.email,
        password:data.password,
        phoneno:data.phoneno,
        designation:data.designation,
        salary:data.salary,
        city:data.city,
        country:data.country,
        address:data.address,
        pincode:data.pincode,
    })
    await obj1.save().then( async ()=>{
            const accessToken=jwt.sign({email:obj1.email},"jamesbond",{expiresIn:'30s'})
            const refreshToken=jwt.sign({email:obj1.email},"jamesbond",{expiresIn:'1d',})
            await User.findByIdAndUpdate(obj1._id,{jwtrefreshtoken:refreshToken})
            res.cookie('jwtrefreshtoken',refreshToken,{httpOnly:true,maxAge:24*60*60*1000,sameSite:'none'})
            res.status(202).send({
                activeStatus:true,
                msg:'sign up successfully done. new user created successfully',
                accessToken:accessToken})
        }).catch(err=>{console.log(err); res.send('error occured in signup')})
    //OR 
    // await User.create({name:data.name,
    //     email:data.email,
    //     password:data.password,
    //     phoneno:data.phoneno,
    //     designation:data.designation,
    //     salary:data.salary,
    //     city:data.city,
    //     country:data.country,
    //     address:data.address,
    //     pincode:data.pincode,})
    

} 
)
module.exports=router