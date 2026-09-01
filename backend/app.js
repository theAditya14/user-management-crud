const express = require("express");
const userModel = require('./Model/user') 
const app = express();
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let userData = await userModel.find()
    res.json({
        message: "Server is running",
        data : userData
    });
    //  res.send(userData)
});



app.post("/create",async (req, res) => {
 let {name,email,imageUrl} =  req.body

 let userData = await userModel.create({ name,email,imageUrl })

   console.log(userData)
//   res.send(userData)
    res.json({
        message: "Data reached server",
        data: userData
    });
});



app.get('/read', async(req,res) =>{
    let users = await userModel.find()
    res.send(users)
})

app.delete('/users/:id', async(req,res) =>{
    let users = await userModel.findOneAndDelete({_id:req.params.id})
    // console.log(req.params.id)
    // res.redirect("http://localhost:5173/users")
    res.json({
        message: 'Delete succesfully'
    })
})


app.patch('/users/:id', async (req,res) =>{
    // res.send("Here You can update", req.params.id)
     const userId = req.params.id
    //  console.log(userId);
    const {name,email,imageUrl} = req.body
  
     try{
       
        const updateUser = await userModel.findByIdAndUpdate(
            userId,
            {
                name:name,
                email:email,
                imageUrl: imageUrl
            }

        )
        res.json({
            message:'User Updated successfully',
            data : updateUser
        });



     } catch(err){
         console.log(err);
         res.status(500).json({
            message: "Something went wrong"
        });
     }
  
})



app.listen(3000, () => {
    console.log("This server is running on port 3000");
});