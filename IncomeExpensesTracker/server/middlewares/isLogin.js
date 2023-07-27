const { appErr } = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader")
const verifyToken=require("../utils/verifyToken.js");
const isLogin=(req,res,next)=>{
    //get token from request header
    const token=getTokenFromHeader(req);
    //verify
    const decode=verifyToken(token);
    //save the user into request body
    req.user=decode.id;
    if(!decode){
        return next(new appErr("Invalid Token Ok",405));
    }
    next();
}
module.exports=isLogin;