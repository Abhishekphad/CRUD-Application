const { error } = require('console');
const User=require('../models/userModel.js')

exports.home=(req, res) => {
    res.send('Hello, world!');
}

exports.createUser=async(req,res)=>{
    try {
        const {name,email}=req.body

        if(!name || !email){
            throw new error("Name and email are required.!")
        }

        const userExist=User.findOne({email})
        if(userExist){
            throw new error("User already exist")
        }

        const user=await User.create({
            name,
            email
        })
        res.status(201).json({
            success: true,
            message: "User created Suceesfully.!",
            user
        })

    } catch (error) {
        console.log(error),
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


exports.getUser=async(req,res)=>{
    try {
        const users=await User.find({})
        if(User.length<5){
            throw new error("Enter valid user name")
        }
        res.status(201).json({
            success: true,
            message: "User created Suceesfully.!",
            User
        })
    } catch (error) {
        console.log(error),
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
exports.updateUser=async(req,res)=>{

}


exports.deleteUser=async(req,res)=>{
    try{
        const UserId= req.params.id
        await User.findByIdAndDelete(UserId)
        res.status(200).json({
            success:true,
            message:"User removed successfully"
        })
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            success:false,
            message: " Error to find user...!"
        })
    }
}