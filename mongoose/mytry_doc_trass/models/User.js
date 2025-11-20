import mongoose from 'mongoose';

const MongooseSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Mongoose || mongoose.model('Mongoose', MongooseSchema);