const express = require ("express");
const app = express();

const userModel  = require("./models/user")
const postModel  = require("./models/posts")
app.use(express.json());

app.get('/',(req,res)=>
{
    res.send("Welcome");
});

app.get('/create',async(req,res)=>
{

    let createdUser = await userModel.create(
        {
                 username:'Ahtsham',
                 email:"A@gmail.com",
                 age:19,
                //  post:"THis is my first post"
        }
       
    )
     res.send(createdUser);
})


app.get('/create/post',async (req,res)=>
{
   let post = await postModel.create(
        {
            postdata: "hello ,how are you",
            user:'6a2467808c5608129e3f16fe'
        }
    )

    let user = await userModel.findOne({
        // _id: "6a2467808c5608129e3f16fe"
        _id: "6a2467808c5608129e3f16fe"
    })

    user.posts.push(post._id);
    await user.save();
    res.send({ post ,user});
})
app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})