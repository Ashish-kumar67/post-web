const express = require('express');
const router = express.Router();

const {Posts , Likes} = require('../models')

router.get("/" , async(req , res)=>{
    const postList =  await Posts.findAll({include : [Likes]});
    res.json(postList);
})

router.post("/" , async(req , res)=>{
       const post = req.body
      await Posts.create(post);
      res.json(post);
})
module.exports = router; 