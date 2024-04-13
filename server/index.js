const express = require('express');
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors());






//Routers

const postRouter = require('./routes/Posts')
app.use("/posts" , postRouter);
const userRouter = require('./routes/Users')
app.use("/users" , userRouter);
const likeRouter = require('./routes/Likes')
app.use("/likes" , likeRouter);

const db = require('./models')
db.sequelize.sync().then(
    app.listen(3001 , ()=>{
        console.log("server listenning on 3001! ");
    })
)



