import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        //console.log(message);
        const {id:receiverId}=req.params;
        const senderId= req.user._id

       let conversation= await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],

            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }


        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId= getReceiverSocketId(receiverId);
        if(receiverSocketId){
            //io.to(<socket_id>).emit () is used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        return res.status(201).json( newMessage)


       // console.log("message sent successfully")

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })

    }
}


export const getMessage =async(req,res)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderId= req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages");//not references but actual array

        if(!conversation) return res.status(200).json([])

        const  messages=conversation.messages

        res.status(200).json(messages)

    }catch(e){
        console.log(e.message);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })

    }
}