const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const singup = mongoose.Schema(
  {
    firstName: { type: String },
    lastname: { type: String },
  },
  { timestamps: true, strict: false }
);

const addAddress = mongoose.Schema(
  {
    address: { type: String },
    uuid: { type: ObjectId },
  },
  { timestamps: true, strict: false }
);
const addNumber = mongoose.Schema(
  {
    number: { type: String },
    uuid: { type: ObjectId },
  },
  { timestamps: true, strict: false }
);

const singupTable = mongoose.model("users", singup);
const numberTable = mongoose.model("numbertable", addNumber);
const addressTable = mongoose.model("addresstable", addAddress);

const postUser = async (req) => {
  try {
    const dt = await singupTable.create(req);
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

const postAddress = async (req) => {
  try {
    const dt = await addressTable.create(req);
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};
const postNumber = async (req) => {
    console.log(req,"post")
  try {
    const dt = await numberTable.create(req);
    return { dt: dt, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

const LoginUserData = async (userData) => {
  console.log(userData, "dddd");
  try {
    const dt = await singupTable.findOne({ email: userData.email });
    console.log(dt.password, userData.password, "111");
    if (dt.password !== userData.password) {
      return { status: 400, message: "invalid" };
    }
    const { _id, name, password } = dt;
    const data = { _id, name, password };
    return { data: data, status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

const pdfModal = async (req, res) => {
  try {
    const data = await singupTable.aggregate([
      {
        $lookup: {
          from: "numbertables",
          localField: '_id',
          foreignField: 'uuid',
          as: 'number'
        },
      },
      {
        $lookup: {
          from: "addresstables",
          localField: "_id",
          foreignField: "uuid",
          as: "address"
        },
      },
      
      {
        $project: {
          firstName: 1,
          lastName: 1,
          address: 1,
          number: 1,
        },
      },
    ]).exec();
  
    return { data, message: 'Success' };
  } catch (error) {
    // Handle any errors here
  }
  
  };
  
  
  
  
  

module.exports = { postUser, LoginUserData, pdfModal,postAddress,postNumber};
