const { default: mongoose } = require("mongoose");


const connectMongoDB = async () => {
    try {
      await  mongoose.connect(process.env.MONGODB_URI)
        console.log("connet db ok");
        
    } catch (error) {
        console.log("db connect error" , error);
        
    }
}
export default connectMongoDB