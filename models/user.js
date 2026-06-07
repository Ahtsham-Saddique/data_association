const mongoose = require("mongoose");

// connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/testing_database");

// schema
const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: String,
    age: Number,
    posts: [
          { 
             type: mongoose.Schema.Types.ObjectId,
             ref: 'post'
          }
    ]
});

// model (IMPORTANT FIX)
const User = mongoose.model("User", userSchema);

// export
module.exports = User;