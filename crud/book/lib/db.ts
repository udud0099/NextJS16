import mongoose from "mongoose"


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
        console.log("connect db");
        
    } catch (error) {
        console.log("fail to connect db", error)
        process.exit(1)
    }
}

export default connectDB