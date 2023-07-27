const bcrypt=require("bcryptjs");
const User = require("../../models/User");
const {Apperr,appErr}=require("../../utils/appErr.js");
const generateToken= require("../../utils/generateToken");
const verifyToken= require("../../utils/verifyToken");
//Register
const registerUserCtrl = async (req, res,next) => {
  try {
    const {fullname,email,password}=req.body;
    const userfound=await User.findOne({email});
    if(userfound){
      return next(appErr("User already existed",400,"Failedd")); 
    }
    if(!fullname||!email||!password){
      res.json({message:"please provide all the fields"});
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=await User.create({
      fullname,
      email,
      password:hashedPassword,
    })
    res.json({
      status:"Success",
      fullname:newUser.fullname,
      fulldetails:newUser,
      id:newUser._id,
    });
  } catch (error) {
    res.json(error);
  }
};

//login
const userLoginCtrl = async (req, res) => {
  try {
    const {email,password}=req.body;
    const userFound=await User.findOne({email});
    console.log(userFound)
    if(!userFound){
      return res.json({message:"invalid email address"});
    }
    const isPasswordMatch=await bcrypt.compare(password,userFound.password);
    if(!isPasswordMatch){
      return res.json({message:"invalid password"});
    }
    res.json({
      status:"Success",
      fulldetails:userFound,
      token:generateToken(userFound._id),
    });
  } catch (error) {
    res.json(error);
  }
};

//profile
const userProfileCtrl = async (req, res) => {
  try {
    const userFound=await User.findById(req.user)
    res.json({user:userFound});
  } catch (error) {
    res.json(error);
  }
};

//delete
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "update route" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
};
