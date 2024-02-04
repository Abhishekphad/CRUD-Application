const { error, log } = require('console');
const mongoose= require('mongoose');
const connectToDB= async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`Connected to database; ${conn}`);
    })
    .catch((error)=>{
        console.log(error.msg);
        process.exit(1);
    })
}

module.exports=connectToDB;