import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import userRoute from "./routes/user.route.js"

import connectDB from './db/db.js';
import { app, server } from './socket/socket.js';




const port=process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)
app.use("/api/user",userRoute)


app.get('/',(req,res)=>{
    res.send('Hello, World!')
})


server.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})