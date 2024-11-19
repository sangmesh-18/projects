import jwt from 'jsonwebtoken'
import User from '../model/user.model.js';

const protectRoute = async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        //console.log(token)
        if(!token){
           return res.status(401).json({
                error:"Unauthorized - No Token Provided",
                success:false
            })

        }
       // console.log(process.env.JWT_SECRET_KEY);
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        //console.log(process.env.JWT_SECRET_KEY); // Should print your secret key


        if(!decoded){
           return res.status(401).json({
            error:"Unauthorized - Invalid Token",
            success:false
           })
        }

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(404).json({
                error:"User not found",
                success:false
            })
        }

        req.user=user

        next()


    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export default protectRoute