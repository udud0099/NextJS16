const { Schema, default: mongoose } = require("mongoose");


const topicSchema  = new Schema(
    {
        title: String,
        des: String,
    },
    {timestamps:true}
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)

export default Topic


