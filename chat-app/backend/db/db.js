import mongoose  from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to mongoDB");
    }
    catch(e){
        console.error(`Error connecting to MongoDB: ${e.message}`);
        process.exit(1);
    }
}

export default connectDB;