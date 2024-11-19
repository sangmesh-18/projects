import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/token.js";

export const signup = async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
        //console.log(fullName,username,password,confirmPassword,gender)
        if(password != confirmPassword){
            return res.status(400).json({
                message: "Passwords do not match",
                success: false
            })
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({
                message: "Username already exists",
                success: false
            })
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password,10)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic,
        })

        if(newUser){
             generateToken(newUser._id,res);;
            await newUser.save();

            res.status(200).json({
               _id:newUser._id,
               fullName: newUser.fullName,
               username: newUser.username,
               profilePic: newUser.profilePic,
               success: true
            })

        }
        else{
            res.status(400).json({
                message: "IInvalid user data",
                success: false
            })
        }

       

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })

    }

}
export const login =async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({
                message: "Invalid username or password",
                success: false
            })
        }
        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
            success: true
        })
    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
    
    

}

export const logout =(req,res)=>{
    try{
        res.cookie("jwt","",{
            maxAge:0
        })
        res.status(200).json({
            message: "User logged out successfully",
            success: true
        })

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }

}