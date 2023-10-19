const { postUser, postAddress, postNumber } = require("../modal/signupModal");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const postSignupcontroller = async(req,res)=>{
    const {firstName,lastName}=req.body;
    const temp = {firstName,lastName}
    // console.log(req.body,"temp") 
    const data =await postUser(temp);
    res.send(data)
}

const postAdderssController = async(req,res)=>{
    const {address,uuid}=req.body;
    const objectId = new mongoose.Types.ObjectId(uuid);
    const temp = {
      address,
      uuid:objectId
    }
    // console.log(req.body,"temp") 
    const data =await postAddress(temp);
    res.send(data)
}

const postNumberController = async (req, res) => {
    const { number, uuid } = req.body;
    const objectId = new mongoose.Types.ObjectId(uuid);
    const temp = {
      number,
      uuid: objectId,
    };
    const data = await postNumber(temp);
    res.send(data);
  };

module.exports = {postSignupcontroller,postAdderssController,postNumberController}