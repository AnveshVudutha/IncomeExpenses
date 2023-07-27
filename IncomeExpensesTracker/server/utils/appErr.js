class Apperr extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        this.status="Fail";
    }
}
const appErr=(message,statusCode,status)=>{
    const error=new Error(message);
    error.statusCode=statusCode;
    error.status=status;
    return error;
}
module.exports={
    Apperr,
    appErr,
}