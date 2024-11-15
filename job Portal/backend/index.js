import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import user from './routes/user.js'
import companyRoute from './routes/companyRoute.js'
import jobRoute from './routes/jobRoute.js'
import applicationRoute from './routes/applicationRoute.js'
dotenv.config({});

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
 
// app.use(cors({
//   origin: 'http://localhost:5173',  // Allow requests from this origin
//   credentials: true,                // Enable credentials (cookies, authorization headers, etc.)
// }));

app.get("/",(req,res)=>{
  res.send("hello world")
})


//API's
app.use("/api/v1/user",user);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/apply-job",applicationRoute);
app.listen(PORT,()=>{
  connectDB();
    console.log(`server is running on port ${PORT}`)

})