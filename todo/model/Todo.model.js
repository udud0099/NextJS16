const { Schema, default: mongoose } = require("mongoose");


const TodoSchema = new Schema({
    title: {
        type:String,
        require:true
    },
    description:{
        type: String,
        require: true
    }
})

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

export default Todo