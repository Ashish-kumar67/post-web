const express = require('express');
const router = express.Router();

const {Users} = require('../models')



router.post("/" , async(req , res)=>{
       const user = req.body
       console.log("hi" , user);
      await Users.create(user);
      res.json(user);
})
router.post("/login" , async(req , res)=>{
      const {email , password} = req.body
     const user = await Users.findOne({where : {email:email}});
     if(!user) res.json({error : "no user"})
     if(user.password===password)
      res.json(user)
     else
     res.json("fail")
})
module.exports = router; 