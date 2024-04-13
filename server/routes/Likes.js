const express = require('express');
const router = express.Router();

const {Likes} = require('../models')



router.post("/" , async(req , res)=>{
       const {PostId , UserId } = req.body
        console.log("hi",req.body)
       const found = await Likes.findOne({
        where :{PostId:PostId , UserId:UserId}
       })
       if(!found)
       {
        await Likes.create({PostId:PostId , UserId:UserId });
        res.json("liked!");
       }
       else{
        await Likes.destroy({
            where :{PostId:PostId , UserId:UserId}
           })
           res.json("unliked!");
       }
     
      
})
module.exports = router; 