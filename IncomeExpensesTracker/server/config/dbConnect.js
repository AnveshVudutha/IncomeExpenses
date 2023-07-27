const mongoose=require("mongoose")
const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://Anvesh:Yamini%40143@fullstackblogproject.m78ekeq.mongodb.net/incomeExpenses?retryWrites=true&w=majority')
        console.log("db connected successfully and running");
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
dbConnect();