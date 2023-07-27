const Account = require("../../models/Account");
const User = require("../../models/User");
const {appErr} = require("../../utils/appErr");
//create
const createAccountCtrl = async (req, res) => {
  const {name,accountType,initialBalance,notes}=req.body;
  try {
    //find the log in user
    const userfound=await User.findById(req.user);
    if(!userfound){
      return next(appErr("user not logged in found",407));
    }
    const account=await Account.create({
      name,
      accountType,
      initialBalance,
      notes,
      createdBy:req.user,
    })
    res.json({msg:account});
  } catch (error) {
    res.json(error);
  }
};

//all
const getAccountsCtrl = async (req, res) => {
  try {
    res.json({ msg: "get account route" });
  } catch (error) {
    res.json(error);
  }
};

//single
const getAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "get account route" });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "update route" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAccountCtrl,
  getAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl,
};
