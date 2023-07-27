const express=require("express");
require("./config/dbConnect.js")
const usersRoute = require("./routes/users/usersRoute.js");
const accountRoute=require("./routes/accounts/accountRoute.js")
const transactionsRoute=require("./routes/transactions/transactionsRoute.js");
const globalErrHandler = require("./middlewares/globalErrHandler.js");
const app=express()
//pass incoming Data through json of express
app.use(express.json())
//middlewares 
app.use("/api/v1/users",usersRoute);
app.use("/api/v1/accounts",accountRoute);
app.use("/api/v1/transactions",transactionsRoute);
app.use(globalErrHandler);
//listen to server 
const PORT=process.env.PORT||9000
app.listen(PORT,()=>{
    console.log(`Server is Up and Running on port number ${PORT}`)
}); 