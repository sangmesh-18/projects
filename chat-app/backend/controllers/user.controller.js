import User from "../model/user.model.js";

export const getUserForSidebar =async(req,res)=>{
    try{
        const loggedUser= req.user._id;
        
        //this will give all users except that logged in user
        const allUsers=await User.find({_id:{$ne:loggedUser}}).select("-password") 
         
        return res.status(201).json(allUsers)

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}