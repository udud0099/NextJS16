import mongoose, { Schema } from "mongoose";


interface iMode extends Document {
    note: string;
    mood: string;
    createdAt:Date;
}

const ModeSchema: Schema = new Schema({
    note: {type:String, required:true},
    mood: {type:String, required:true},
    createdAt: {type:Date, default:Date.now},
})


const Mood = mongoose.models?.Mood || mongoose.model<iMode>("Mood", ModeSchema)

export default Mood