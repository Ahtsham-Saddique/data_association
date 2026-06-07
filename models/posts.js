const mongoose = require ("mongoose");
// const module = require ("module");


let postSchema = mongoose.Schema(
    {
        postdata:String,
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        date :
        {
            type: Date,
            default: Date.now
        }
    }
)

// module.exports = mongoose.model({"post",postSchema});

const post = mongoose.model("post",postSchema);

module.exports= post ;
