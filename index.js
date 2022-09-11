const express=require("express")
const mongoose=require("mongoose")
const router=require("./src/router/router")
const dotenv=require("dotenv")
dotenv.config()

const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://RinkiPradhan:moShtmwBC2cEopn2@cluster0.xs93j.mongodb.net/SocialMedia",{
    useNewUrlParser:true
})
.then(()=>console.log("MongooDB successfully connected.😍😍😍" ))
.catch(err=>console.log(err))

app.use("/",router);
app.listen(process.env.PORT ||3000, function(){
    console.log('Express app running on port ' +(process.env.PORT ||3000))
})
